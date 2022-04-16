import React, { Component } from "react";

export default class index extends Component {
  state = {
    num: 0,
  };
  add = () => {
    const { num } = this.state;
    this.setState({ num: num + 1 });
    console.log(this.state.num);
  };
  render() {
    const { num } = this.state;
    return (
      <div>
        <h3>{num}</h3>
        <button onClick={this.add}>加1</button>
      </div>
    );
  }
}
