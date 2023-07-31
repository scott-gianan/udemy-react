import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }
  incrementCount() {
    this.setState((currentState) => {
      return { count: currentState.count + 1 };
    });
  }
  decrementCount() {
    this.setState((currentState) => {
      return { count: currentState.count - 1 };
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.decrementCount}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.incrementCount}>+</button>
      </div>
    );
  }
}
export default Counter;
