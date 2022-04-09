import React, { Component } from "react";
// import { connect } from 'react-redux'

export default class User extends Component {
  state = {
    sum: 0,
  };
  increment = () => {
    const { sum } = this.state;
    const { value } = this.numberNode;
    this.setState({ sum: sum + Number(value) });
  };
  decrement = () => {};
  incrementIfOdd = () => {};
  incrementAsync = () => {};
  render() {
    return (
      <div>
        <h2>当前求和为:{this.state.sum}</h2>
        <select ref={(c) => (this.numberNode = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>奇数加</button>
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(User)
