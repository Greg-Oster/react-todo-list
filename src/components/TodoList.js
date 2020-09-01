import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <h2>Hello from TodoList</h2>
        {this.props.data.items.map((item) => (
          <TodoItem
            propsdata={item}
            key={item.id}
            deletef={this.props.delete}
            edit={this.props.edit}
          />
        ))}
        {/* <TodoItem title="info fofo" /> */}
      </>
    );
  }
}
