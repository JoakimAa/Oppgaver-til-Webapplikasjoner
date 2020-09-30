import React, { useState } from 'react';
import Header from './src/components/Header.jsx';
import Main from './src/components/Main.jsx';
import Modal from './src/components/Modal.jsx';

const App = () => {
  const [modal, setModal] = useState(false);
  const [count, setCount] = useState(0);
  const [todoTitle, setTodoTitle] = useState({ title: '' });
  const [todoDesc, setTodoDesc] = useState({ description: '' });
  const [todoAuthor, setTodoAuthor] = useState({ author: '' });
  const [todos, setTodos] = useState([]);
  const [todosCompleted, setTodosCompleted] = useState([]);

  const addTodoCardToCompletedList = (todo) => {
    setTodosCompleted([...todosCompleted, todo]);
  };

  const addTodoCard = () => {
    setTodos((prev) => [
      {
        id: count,
        ...todoTitle,
        ...todoDesc,
        ...todoAuthor,
      },
      ...prev,
    ]);
    setCount(count + 1);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <Header />
      <Main
        todos={todos}
        removeTodo={removeTodo}
        setModal={setModal}
        modal={modal}
        todosCompleted={todosCompleted}
        addTodoCardToCompletedList={addTodoCardToCompletedList}
      />
      {modal && (
        <Modal
          todoTitle={todoTitle}
          setTodoTitle={setTodoTitle}
          todoDesc={todoDesc}
          setTodoDesc={setTodoDesc}
          todoAuthor={todoAuthor}
          setTodoAuthor={setTodoAuthor}
          addTodoCard={addTodoCard}
          setModal={setModal}
          modal={modal}
        />
      )}
    </>
  );
};
export default App;
