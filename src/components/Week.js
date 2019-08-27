import React from 'react';
import Day from './Day';
import { isEqual } from 'date-fns';

export default (props) => {
  const week = props.week.map((day, index) => {
    let todos = props.todos.filter(t => isEqual(t.date, day));

    return (
      <Day day={day} 
        month={props.month} 
        todos={todos} key={index}
        deleteTodo={props.deleteTodo}
        addNewTodo={props.addNewTodo}
        now={props.now}
      />
    );
  });

  return <div className='week'>
    {week}
  </div>
}
