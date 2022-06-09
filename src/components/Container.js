import React, { Component } from "react";
import Counter from "./Counter";
import axios from "axios";

class Container extends Component {
  state = {
    total: 0,
    users: []
  };

  componentDidMount() {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleTotalIncrement = (value) => {
    this.setState({ total: this.state.total + value });
  };

  handleTotalDecrement = (value) => {
    this.setState({ total: this.state.total - value });
  };

  handleIncrement = (event) => {
    const currentState = this.state.count;
    const amount = this.state.amount;
    this.setState({ count: currentState + amount });
  };

  handleDecrement = () => {
    const currentState = this.state.count;
    const amount = this.state.amount;
    this.setState({ count: currentState - amount });
  };

  render() {
    return (
      <div>
        <h2> Total Count: {this.state.total}</h2>
        {this.state.users
          ? this.state.users.map((user) => {
              return (
                <Counter
                  key={user.id}
                  name={user.name}
                  increment={this.handleTotalIncrement}
                  decrement={this.handleTotalDecrement}
                />
              );
            })
          : null}
      </div>
    );
  }
}
export default Container;
