import React, { Component } from "react";

class Amount extends Component {
  state = {
    amount: this.props.amount
  };

  handleChange = (event) => {
    console.log(event.target.value);

    const value = event.target.value;
    this.setState({ amount: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.amountHandle(this.state.amount);
  };

  render() {
    const { amount } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <strong>Amount</strong>
          </label>

          <input
            name="amount"
            type="number"
            defaultValue={amount}
            onChange={this.handleChange}
          />

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Amount;
