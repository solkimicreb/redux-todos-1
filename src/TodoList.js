import React from 'react';
import TodoItem from './TodoItemContainer';

export default function TodoList({ todos }) {
  return <ul>{todos.map(todo => <TodoItem key={todo.text} todo={todo} />)}</ul>;
}
