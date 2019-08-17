import React from 'react';
import Day from './Day';
import './week.css';

export default (props) => {
  return <div className='week'>
    {props.week.map((day, index) => <Day day={day} key={index}/>)}
  </div>
}
