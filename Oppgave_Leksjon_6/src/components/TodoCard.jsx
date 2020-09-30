import React from 'react';
import Title from './Title';

const TodoCard = ({ todo, removeTodo, addTodoCardToCompletedList }) => (
  <article>
    <Title title={todo.title} />
    <p>{todo.description}</p>
    <div className="buttonFlex">
      <button
        type="button"
        className="bDelete"
        onClick={() => removeTodo(todo.id)}
      >
        Delete
      </button>
      <button
        type="button"
        className="bComplete"
        onClick={() => {
          addTodoCardToCompletedList(todo);
          removeTodo(todo.id);
        }}
      >
        Complete
      </button>
    </div>
  </article>
);

export default TodoCard;
