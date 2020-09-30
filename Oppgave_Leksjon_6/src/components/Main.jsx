import React from 'react';
import CompletedList from './CompletedList';
import TodoButton from './TodoButton';
import TodoCardList from './TodoCardList';

const Main = ({
  todos,
  removeTodo,
  setModal,
  modal,
  todosCompleted,
  addTodoCardToCompletedList,
}) => (
  <>
    <main>
      <div id="flexOne">
        <TodoButton setModal={setModal} modal={modal} />
      </div>
      <div id="flexTwo">
        {todos && todos.length < 1 ? (
          <p>Jippi! Ingen todos i dag</p>
        ) : (
          <TodoCardList
            todos={todos}
            removeTodo={removeTodo}
            addTodoCardToCompletedList={addTodoCardToCompletedList}
          />
        )}
      </div>
      <div id="flexThree">
        <CompletedList todosCompleted={todosCompleted} />
      </div>
    </main>
  </>
);

// TODO: Add plus symbol
export default Main;
