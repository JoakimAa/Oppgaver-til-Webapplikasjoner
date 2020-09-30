import React from 'react';

const TodoButton = ({ setModal, modal }) => (
  <>
    <button type="button" id="bTodo" onClick={() => setModal(!modal)}>
      + Todo
    </button>
  </>
);

export default TodoButton;
