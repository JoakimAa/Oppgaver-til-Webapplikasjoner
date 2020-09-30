import React from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({ todos, removeTodo, addTodoCardToCompletedList }) =>
  todos &&
  todos.length > 0 &&
  todos
    .slice(0, 3)
    .map((todo) => (
      <TodoCard
        todo={todo}
        removeTodo={removeTodo}
        addTodoCardToCompletedList={addTodoCardToCompletedList}
        key={todo.id}
      />
    ));

export default TodoCardList;
