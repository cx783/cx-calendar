import React, { useState, useRef, useEffect } from 'react';
import { format, getMonth } from 'date-fns';
import TodoList from './TodoList';
import Tooltip from './Tooltip';

export default (props) => {
  const day = format(props.day, 'DD');
  const inCurrentMonth = props.month === getMonth(props.day);
  const [showAddTodoTooltip, setShowAddTodoTooltip] = useState(false);
  let [newTodo, setNewTodo] = useState('');
  let parentRef = useRef(null);

  const inputRef = useRef();

  useEffect(() => {
    if (showAddTodoTooltip) {
      inputRef.current.focus();
    }
  })

  const addNewTodo = () => {
    props.addNewTodo({text: newTodo, date: props.day});
    setNewTodo('');
    setShowAddTodoTooltip(false);
  }
  
  return (
    <div className={`day ${inCurrentMonth ? 'inMonth' : 'inOtherMonth'}`} ref={parentRef}>
      <div>
        {day}
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
        </Tooltip>}
    </div>
  );
}
