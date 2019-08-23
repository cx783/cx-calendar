import React from 'react';
import { format, getMonth } from 'date-fns';
import './day.css';

export default (props) => {
  const day = format(props.day, 'DD');
  const inCurrentMonth = props.month === getMonth(props.day);
  
  return (
    <div className={`day ${inCurrentMonth ? 'inMonth' : 'inOtherMonth'}`}>
      <div>{day}</div>
      <ul>
        {props.todos.map(t => <li>{t.text}</li>)}
      </ul>
    </div>
  );
}
