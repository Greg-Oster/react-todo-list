import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item } = this.props.data;
    const handleSubmit = this.props.submit;
    const onchange = this.props.onchange;
    console.log(item);
    console.log(handleSubmit);
    return (
      <>
        <input
          type="text"
          name="item"
          value={item}
          onChange={() => onchange(this.event)}
        />
        <button onClick={() => handleSubmit(4)}>Save</button>
      </>
    );
  }
}
