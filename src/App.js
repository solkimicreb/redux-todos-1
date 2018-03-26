import React from 'react';
import TodoAdder from './TodoAdderContainer';
import TodoList from './TodoListContainer';

export default function App() {
  return (
    <div>
      <TodoAdder />
      <TodoList />
    </div>
  );
}
