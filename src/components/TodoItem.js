import React from 'react';

export default (props) => {
  return (
    <li className="todo-item">
      { props.todo.text } 
      <button onClick={() => props.deleteTodo(props.todo.id)}
        className="button button-small button-red left-button">&times;</button>
  </li>
  );
}