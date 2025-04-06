import { Component } from "react";

export class Todo extends Component {
  render() {
    const { text } = this.props.todos;
    return (
      <div className="todo">
        <p>{text}</p>
        {/* Add the onClick event to handle removal of the todos */}
        <button onClick={() => this.props.handleRemove(text)}>x</button>
      </div>
    );
  }
}
