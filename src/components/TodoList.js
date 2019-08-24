import React from 'react';
import TodoItem from './TodoItem';

export default (props) => {
  return (
    <ul className="todo-list">
      {props.todos.map(t => <TodoItem todo={t} deleteTodo={props.deleteTodo} key={t.id} />)}
    </ul>
  );
}
