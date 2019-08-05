import React from 'react';
import './Todo.css'

const Todo = props => {
  return (
    <div
      className={`item${props.todo.completed === true ? ' completed' : ''}`}
      onClick={() => props.toggleItem(props.todo.id)}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
