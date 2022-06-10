import React, { Component } from "react";
import Counter from "./Counter";
import axios from "axios";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  totalIncrement,
  totalDecrement
} from "../redux/CounterReducer";

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
        console.log(this.props);
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleTotalIncrement = (value) => {
    this.props.totalIncrement(value);
    // this.setState({ total: this.state.total + value });
  };

  handleTotalDecrement = (value) => {
    this.props.totalDecrement(value);
    //this.setState({ total: this.state.total - value });
  };

  handleIncrement = (event) => {
    this.props.increment();
    // const currentState = this.state.count;
    // const amount = this.state.amount;
    // this.setState({ count: currentState + amount });
  };

  handleDecrement = () => {
    this.props.decrement();
    //const currentState = this.state.count;
    //const amount = this.state.amount;
    //this.setState({ count: currentState - amount });
  };

  render() {
    // console.log(this.props.increment);
    return (
      <div>
        <h2> Total Count: {this.state.total}</h2>
        {this.state.users
          ? this.state.users.map((user) => {
              return (
                <Counter
                  key={user.id}
                  name={user.name}
                  totalIncrement={totalIncrement}
                  totalDecrement={totalDecrement}
                  increment={increment}
                  decrement={decrement}
                />
              );
            })
          : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
  amount: state.amount,
  users: state.users
});

const mapDispatchToProps = {
  increment,
  decrement,
  totalIncrement,
  totalDecrement
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
