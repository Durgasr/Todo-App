import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="list">
        {todos.map((todo, index) => (
          <Todo todos={todo} key={index} handleRemove={this.props.handleRemove} />
        ))}
      </div>
    );
  }
}
