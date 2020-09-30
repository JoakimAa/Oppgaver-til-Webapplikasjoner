import React, { useState } from 'react';

const Modal = ({
  todoTitle,
  setTodoTitle,
  todoDesc,
  setTodoDesc,
  todoAuthor,
  setTodoAuthor,
  addTodoCard,
  setModal,
  modal,
}) => {
  const resetForm = () => {
    setTodoTitle('');
    setTodoDesc('');
    setTodoAuthor('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoCard();
    setModal(!modal);
    resetForm();
  };
  const displayTodoTitle = (e) => {
    setTodoTitle({ title: e.target.value });
  };
  const displayTodoDesc = (e) => {
    setTodoDesc({ description: e.target.value });
  };
  const displayTodoAuthor = (e) => {
    setTodoAuthor({ author: e.target.value });
  };

  return (
    <>
      <div id="newTodo">
        <div className="newTodoContent">
          <div id="topElements">
            <h1>New todo</h1>
            <button
              type="button"
              id="modalX"
              onClick={() => {
                setModal(!modal);
                resetForm();
              }}
            >
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
              value={todoTitle.title}
            />
            <label htmlFor="inpDescription">Description</label>
            <input
              type="text"
              name="inpDescription"
              id="inpDescription"
              placeholder="Lorem ipsum dollor sitane"
              onChange={displayTodoDesc}
              value={todoDesc.desc}
            />
            <label htmlFor="inpAuthor">Author</label>
            <input
              type="text"
              name="inpAuthor"
              id="inpAuthor"
              placeholder="Author Author"
              onChange={displayTodoAuthor}
              value={todoAuthor.author}
            />
            <button type="submit" id="bCreate" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
