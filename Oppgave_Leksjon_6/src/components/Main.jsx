import React from 'react';
import TodoCard from './TodoCard';

const Main = () => (
  <>
    <main>
      <div id="flexOne">
        <button type="button" id="bTodo">
          + Todo
        </button>
      </div>
      <div id="flexTwo">
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
      <div id="flexThree">
        <h2 id="completedTodo">Completed todos</h2>
        <table id="completedTodoTable">
          <tr>
            <th id="title">Title</th>
            <th id="author">Author</th>
            <th id="description">Description</th>
            <th id="completedDate">Completed date</th>
          </tr>
        </table>
      </div>
    </main>
  </>
);

// TODO: Add plus symbol
export default Main;
