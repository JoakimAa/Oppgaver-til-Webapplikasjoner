import React, { useState } from 'react';

const Modal = ({ setFormData, formData, addTodoCard, setModal, modal }) => {
  const [descChars, setDescChars] = useState(0);

  const description = `Description (${50 - descChars}  characters left)`;

  const resetForm = () => {
    setFormData('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoCard();
    setModal(!modal);
    resetForm();
  };
  const changeTodoTitle = (e) => {
    setFormData({
      title: e.target.value,
      description: formData.description,
      author: formData.author,
    });
  };
  const changeTodoDesc = (e) => {
    setFormData({
      title: formData.title,
      description: e.target.value,
      author: formData.author,
    });

    setDescChars(e.target.value.length);
  };
  const changeTodoAuthor = (e) => {
    setFormData({
      title: formData.title,
      description: formData.description,
      author: e.target.value,
    });
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
              onChange={changeTodoTitle}
              value={formData.title}
            />
            <label htmlFor="inpDescription">{description} </label>
            <input
              type="text"
              name="inpDescription"
              id="inpDescription"
              placeholder="Lorem ipsum dollor sitane"
              onChange={changeTodoDesc}
              value={formData.description}
              maxLength={50}
            />
            <label htmlFor="inpAuthor">Author</label>
            <input
              type="text"
              name="inpAuthor"
              id="inpAuthor"
              placeholder="Author"
              onChange={changeTodoAuthor}
              value={formData.author}
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
