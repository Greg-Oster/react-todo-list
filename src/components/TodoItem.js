import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    console.log(this.props.delete);
    const { title, id } = this.props.propsdata;
    const { deletef } = this.props;
    return (
      <ul>
        <li>
          {title}
          <button type="button" onClick={() => deletef(id)}>
            delete
          </button>
          <button type="button">edit</button>
        </li>
      </ul>
    );
  }
}
