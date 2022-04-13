import { Component } from "react";
export default class User extends Component {
  increment = () => {
    const { value } = this.numberNode;
    this.props.jia(value * 1);
  };
  decrement = () => {};
  incrementIfOdd = () => {};
  incrementAsync = () => {};
  render() {
    return (
      <div>
        <h2>当前求和为:{this.props.sum}</h2>
        <select ref={(c) => (this.numberNode = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>奇数加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(User)
