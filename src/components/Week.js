import React from 'react';
import Day from './Day';
import './week.css';
import { isEqual } from 'date-fns';

export default (props) => {
  const week = props.week.map((day, index) => {
    let todos = props.todos.filter(t => isEqual(t.date, day));

    return <Day day={day} month={props.month} todos={todos} key={index}/>;
  });

  return <div className='week'>
    {week}
  </div>
}
