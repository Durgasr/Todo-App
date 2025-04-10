import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" },
      ],
    };
  }

  handleAdd = (todo) => {
    if (todo === "") {
      alert("Please enter your task");
    } else {
      this.setState({
        todos: [...this.state.todos, { text: todo }],
      });
    }
  };

  handleRemove = (text) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.text !== text;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        <Form handleAdd={this.handleAdd} />
        <List todos={this.state.todos} handleRemove={this.handleRemove} />
      </div>
    );
  }
}
