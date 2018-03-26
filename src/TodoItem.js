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
        <span>{todo.text}</span>
        <span onClick={this.onClick}> X </span>
      </li>
    );
  }
}
