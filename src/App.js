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
    item: "",
    editItem: false,
  };

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };
  handleSubmit = (e) => {
    console.log("handleSumbit clicked");
    this.setState({
      items: [...this.state.items, { id: uuid(), title: this.state.item }],
      editItem: false,
      item: "",
      id: uuid(),
    });
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
    // покажем только лист без удаляемого

    const filtredItems = this.state.items.filter((item) => item.id !== id);
    console.log("filtredItems:");
    console.log(filtredItems);
    // найдем объект с id редактируемого элемента (но как find работает...)
    const selected = this.state.items.find((item) => item.id === id);
    console.log("selected:");
    console.log(selected);
    // Так как наш инпут связан с полем item стейта -->
    this.setState({
      items: filtredItems,
      item: selected.title,
      id: id,
      editItem: true,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-8-md mx-auto">
              <h1>Green Branch</h1>
              <TodoList
                data={this.state}
                delete={this.handleDelete}
                edit={this.handleEdit}
              />

              <TodoInput
                data={this.state.item}
                submit={this.handleSubmit}
                onchange={this.handleChange}
                editItem={this.state.editItem}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
