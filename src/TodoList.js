import React, { Component } from 'react';
import TodoItem from './TodoItemContainer';

export default class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    const { todos, isLoading } = this.props;
    return (
      <ul>
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        {isLoading && <li>LOADING...</li>}
      </ul>
    );
  }
}
