import React, { useState } from 'react';

const Modal = ({
  displayTodoTitle,
  todoTitle,
  displayTodoDesc,
  todoDesc,
  displayTodoAuthor,
  todoAuthor,
  handleSubmit,
}) => (
  /* const exitModal = (e) => {
    
  }; */

  <>
    <div id="newTodo">
      <div className="newTodoContent">
        <div id="topElements">
          <h1>New todo</h1>
          <button type="button" id="modalX">
            X
          </button>
        </div>
        <form id="newTodoFlex">
          <label htmlFor="inpTodoTitle">Title</label>
          <input
            type="text"
            name="inpTodoTitle"
            id="inpTodoTitle"
            placeholder="Todotitle"
            onChange={displayTodoTitle}
            value={todoTitle}
          />
          <label htmlFor="inpDescription">Description</label>
          <input
            type="text"
            name="inpDescription"
            id="inpDescription"
            placeholder="Lorem ipsum dollor sitane"
            onChange={displayTodoDesc}
            value={todoDesc}
          />
          <label htmlFor="inpAuthor">Author</label>
          <input
            type="text"
            name="inpAuthor"
            id="inpAuthor"
            placeholder="Author Author"
            onChange={displayTodoAuthor}
            value={todoAuthor}
          />
          <button type="submit" id="bCreate" onClick={handleSubmit}>
            Create
          </button>
        </form>
      </div>
    </div>
  </>
);
export default Modal;
