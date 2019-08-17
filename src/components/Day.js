import React from 'react';
import { format } from 'date-fns';

export default (props) => {
  const day = format(props.day, 'DD');
  
  return (
    <div className="day">
      {day}
    </div>
  );
}
