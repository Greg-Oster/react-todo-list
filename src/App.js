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
    ],
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    console.log("handle change");
  };
  handleSubmit = (e) => {
    console.log("handle submit");
  };
  clearList = () => {};
  handleDelete = (id) => {
    console.log(`delete ${id}`);
  };
  handleEdit = (id) => {
    console.log(`edit ${id}`);
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-8-md mx-auto">
              <h1>Green Branch</h1>
              <TodoList />

              <TodoInput />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
