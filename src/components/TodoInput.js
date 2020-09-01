import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    // const { item } = this.props.data;
    // const handleSubmit = this.props.submit;
    // const onchange = this.props.onchange;
    // TODO передавать только item а не весь state
    // в одну строчку передавать
    const { data, submit, onchange } = this.props;
    console.log(this.props);

    return (
      <>
        <input type="text" name="item" value={data} onChange={onchange} />
        <button onClick={submit}>Save</button>
      </>
    );
  }
}
