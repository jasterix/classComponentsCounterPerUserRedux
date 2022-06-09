import "./styles.css";
import Container from "./components/Container";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Container />
      </div>
    );
  }
}
