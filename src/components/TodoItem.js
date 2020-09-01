import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, id } = this.props.propsdata;
    const { deletef } = this.props;
    const { edit } = this.props;
    return (
      <ul>
        <li>
          {title}
          <button type="button" onClick={() => deletef(id)}>
            delete
          </button>
          <button type="button" onClick={() => edit(id)}>
            edit
          </button>
        </li>
      </ul>
    );
  }
}
