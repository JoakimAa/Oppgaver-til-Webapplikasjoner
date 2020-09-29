import React, { useState } from 'react';
import Header from './src/components/Header.jsx';
import Main from './src/components/Main.jsx';
import Modal from './src/components/Modal.jsx';

const App = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDesc, setTodoDesc] = useState('');
  const [todoAuthor, setTodoAuthor] = useState('');
  let todoCard;

  const displayTodoTitle = (e) => {
    setTodoTitle(e.target.vale);
  };
  const displayTodoDesc = (e) => {
    setTodoDesc(e.target.vale);
  };
  const displayTodoAuthor = (e) => {
    setTodoAuthor(e.target.vale);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    todoCard = {
      title: todoTitle,
      description: todoDesc,
      author: todoAuthor,
    };
    e.target.parentNode.parentNode.parentNode.style.display = 'none';
  };

  return (
    <>
      <Header />
      <Main todoCard={todoCard} />
      <Modal
        displayTodoTitle={displayTodoTitle}
        todoTitle={todoTitle}
        displayTodoDesc={displayTodoDesc}
        todoDesc={todoDesc}
        displayTodoAuthor={displayTodoAuthor}
        todoAuthor={todoAuthor}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
export default App;
