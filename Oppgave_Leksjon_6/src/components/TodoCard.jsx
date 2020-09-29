import React from 'react';

const TodoCard = () => (
  <article>
    <h2>Todotitle</h2>
    <p>Description</p>
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
