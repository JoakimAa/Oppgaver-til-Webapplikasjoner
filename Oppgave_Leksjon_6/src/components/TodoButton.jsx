import React from 'react';

const TodoButton = () => {
  const showModal = () => {
    document.getElementById('newTodo').style.display = 'block';
  };
  return (
    <>
      <button type="button" id="bTodo" onClick={showModal}>
        + Todo
      </button>
    </>
  );
};

export default TodoButton;
