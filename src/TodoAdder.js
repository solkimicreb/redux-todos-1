import React, { Component } from 'react';

export default class TodoAdder extends Component {
  state = { text: '' };

  onChange = ev => this.setState({ text: ev.target.value });
  onClick = () => {
    this.props.addTodo({ text: this.state.text });
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;

    return (
      <div>
        <input onChange={this.onChange} value={text} />
        <button onClick={this.onClick}>Add Todo</button>
      </div>
    );
  }
}
