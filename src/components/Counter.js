import React, { Component } from "react";

import Amount from "./Amount";

class Counter extends Component {
  state = {
    amt: 1,
    count: 0
  };
  handleIncrement = (event) => {
    event.preventDefault();
    this.props.increment(this.state.amt);
    this.setState({ count: this.state.count + this.state.amt });
  };

  handleDecrement = (event) => {
    this.props.decrement(this.state.amt);
    this.setState({ count: this.state.count - this.state.amt });
  };

  handleUpdateAmount = (value) => {
    this.setState({ amt: +value });
  };

  render() {
    const { name } = this.props;

    return (
      <div style={{ backgroundColor: "grey", margin: "10px" }}>
        <h1>{name}</h1>
        <h3>Count: {this.state.count}</h3>
        <div style={{ justifyContent: "center" }}>
          <button onClick={this.handleIncrement}>
            increment +{this.state.amt}{" "}
          </button>
          <button onClick={this.handleDecrement}>
            decrement -{this.state.amt}
          </button>
          <h2> Increase by: </h2>
          <Amount
            amount={this.state.amt}
            amountHandle={this.handleUpdateAmount}
          />
        </div>
      </div>
    );
  }
}

export default Counter;
