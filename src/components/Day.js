import React, { useState, useRef, useEffect } from 'react';
import { format, getMonth, isEqual, isSameDay } from 'date-fns';
import TodoList from './TodoList';
import Tooltip from './Tooltip';

export default (props) => {
  const day = format(props.day, 'DD');
  const inCurrentMonth = props.month === getMonth(props.day);
  const [showAddTodoTooltip, setShowAddTodoTooltip] = useState(false);
  let [newTodo, setNewTodo] = useState('');
  let parentRef = useRef(null);

  const inputRef = useRef();
  const isNow = isSameDay(props.now, props.day);

  useEffect(() => {
    if (showAddTodoTooltip) {
      inputRef.current.focus();
    }
  })

  const reset = () => {
    setNewTodo('');
    setShowAddTodoTooltip(false);
  }

  const addNewTodo = () => {
    props.addNewTodo({text: newTodo, date: props.day});
    reset();
  }

  const cancel = () => {
    reset();
  }
  
  return (
    <div className={`day ${inCurrentMonth ? 'inMonth' : 'inOtherMonth'}`} ref={parentRef}>
      <div>
        <span className={`${isNow && 'current-date'}`}>{day}</span>
        {
          inCurrentMonth && 
          <button
            onClick={() => setShowAddTodoTooltip(true)} 
            className="add-button button button-small button-blue left-button"
          >
            +
          </button>
        }
      </div>
      <TodoList todos={props.todos} deleteTodo={props.deleteTodo} />
      {
        showAddTodoTooltip && 
        <Tooltip group={day} parentEl={parentRef} show={showAddTodoTooltip}>
          <input className="form-input" type="text" ref={inputRef} value={newTodo} onChange={e => setNewTodo(e.target.value)} />
          <button className="button button-blue" 
            onClick={addNewTodo}
          >
            Add todo
          </button>
          <button className="button" onClick={() => cancel()}>Cancel</button>
        </Tooltip>}
    </div>
  );
}
