import React from 'react';
import TodoButton from './TodoButton';
import TodoCard from './TodoCard';

const Main = ({ todoCard }) => (
  <>
    <main>
      <div id="flexOne">
        <TodoButton />
      </div>
      <div id="flexTwo">
        <TodoCard todoCard={todoCard} />
      </div>
      <div id="flexThree">
        <h2 id="completedTodo">Completed todos</h2>
        <table id="completedTodoTable">
          <thead>
            <th id="title">Title</th>
            <th id="author">Author</th>
            <th id="description">Description</th>
            <th id="completedDate">Completed date</th>
          </thead>
        </table>
      </div>
    </main>
  </>
);

// TODO: Add plus symbol
export default Main;
