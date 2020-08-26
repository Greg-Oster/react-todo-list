import React, { Component } from "react";
import uuid from "uuid";

import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-8-md mx-auto">
              <h1>Hello from app</h1>
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
