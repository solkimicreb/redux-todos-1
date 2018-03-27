import React from 'react';
import TodoItem from './TodoItemContainer';

export default function TodoList({ todos, isLoading }) {
  return (
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      {isLoading && <li>LOADING...</li>}
    </ul>
  );
}
