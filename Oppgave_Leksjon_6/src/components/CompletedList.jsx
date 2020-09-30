import React, { useState } from 'react';
import CompletedListItem from './CompletedListItem.jsx';
import Search from './Search.jsx';

const CompletedList = ({ todosCompleted }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const todoCompletedFiltered = todosCompleted.filter((todo) =>
    todo.title.toLocaleLowerCase().includes(search)
  );

  const todoCompletedPrint = search ? todoCompletedFiltered : todosCompleted;

  return (
    <>
      <h2 id="completedTodo">Completed todos</h2>
      <Search search={search} handleSearch={handleSearch} />
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
          {todoCompletedPrint &&
            todoCompletedPrint.length > 0 &&
            todoCompletedPrint.map((todoCompleted) => (
              <CompletedListItem
                todoCompleted={todoCompleted}
                key={todoCompleted.id}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default CompletedList;
