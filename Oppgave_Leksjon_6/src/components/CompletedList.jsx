import React from 'react';
import CompletedListItem from './CompletedListItem.jsx';

const CompletedList = ({ todosCompleted }) => (
  <>
    <h2 id="completedTodo">Completed todos</h2>
    <table id="completedTodoTable">
      <thead>
        <tr>
          <th id="title">Title</th>
          <th id="author">Author</th>
          <th id="description">Description</th>
          <th id="completedDate">Completed date</th>
        </tr>
      </thead>
      <tbody>
        {todosCompleted &&
          todosCompleted.length > 0 &&
          todosCompleted.map((todoCompleted) => (
            <CompletedListItem todoCompleted={todoCompleted} />
          ))}
      </tbody>
    </table>
  </>
);

export default CompletedList;
