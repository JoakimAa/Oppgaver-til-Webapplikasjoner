import React from 'react';

const Modal = () => {
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
          <input type="text" name="inpTodoTitle" placeholder="Todotitle" />
          <label htmlFor="inpDescription">Description</label>
          <input
            type="text"
            name="inpDescription"
            placeholder="Lorem ipsum dollor sitane"
          />
          <label htmlFor="inpAuthor">Author</label>
          <input type="text" name="inpAuthor" placeholder="Author Author" />
          <button type="submit" id="bCreate">
            Create
          </button>
        </form>
      </div>
    </div>
  </>;
};

export default Modal;
