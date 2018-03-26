import React, { Component } from 'react';

export default class TodoItem extends Component {
  onClick = () => {
    const { removeTodo, todo } = this.props;
    removeTodo(todo);
  };

  render() {
    const { todo } = this.props;

    return (
      <li>
        <strong>{todo.text}:</strong>
        <span>{todo.description}</span>
        <strong onClick={this.onClick}> X </strong>
      </li>
    );
  }
}
