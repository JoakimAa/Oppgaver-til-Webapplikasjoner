import React from 'react';

const TodoCard = ({ todoTitle, todoDesc }) => (
  <article>
    <h2>{todoTitle}</h2>
    <p>{todoDesc}</p>
    <div className="buttonFlex">
      <button type="button" className="bDelete">
        Delete
      </button>
      <button type="button" className="bComplete">
        Complete
      </button>
    </div>
  </article>
);

export default TodoCard;
