import React, { Component } from "react";
import { v1 as uuid } from "uuid";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    id: uuid(),
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "have sex" },
      { id: 33, title: "burger" },
    ],
    item: "test",
    editItem: false,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (e) => {
    console.log("handle submit");
  };
  clearList = () => {};
  handleDelete = (id) => {
    console.log(`i will delete ${id}`);
    this.setState({
      items: this.state.items.filter((item) => item.id !== id),
    });
  };
  handleEdit = (id) => {
    console.log(`edit ${id}`);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-8-md mx-auto">
              <h1>Green Branch</h1>
              <TodoList data={this.state} delete={this.handleDelete} />

              <TodoInput
                data={this.state}
                submit={this.handleSubmit}
                onchange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
