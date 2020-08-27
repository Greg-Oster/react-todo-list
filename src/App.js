import React, { Component } from "react";
import { v1 as uuid } from "uuid";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

import "bootstrap/dist/css/bootstrap.min.css";

// 1. We store everything inside App (state, methods)
// 2. We drilling down to other components

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
            <div className="col-12-md mx-auto">
              <h1>Where am i</h1>
              <TodoInput
                item={this.state.item}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
                clearList={this.clearList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
