import React, { Component } from 'react';

export default class TodoAdder extends Component {
  state = { text: '', description: '' };

  onChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  onSubmit = ev => {
    ev.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ text: '', description: '' });
  };

  render() {
    const { text, description } = this.state;

    return (
      <form onChange={this.onChange} onSubmit={this.onSubmit}>
        <label>Title</label>
        <input name="text" value={text} />
        <label>Description</label>
        <input name="description" value={description} />
        <button>Add Todo</button>
      </form>
    );
  }
}
