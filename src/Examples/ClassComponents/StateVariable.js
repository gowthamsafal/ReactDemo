import React, { Component } from "react";
import Display from "./Display";

class stateVariable extends Component {
  state = {
    name: "Gowtham Safal",
    products: [],
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }));
  }
  render() {
    return (
      <div>
        <Display data={this.state.products} />
        <button onClick={() => this.setState({ name: "Sai Priyanka" })}>
          Change
        </button>
      </div>
    );
  }
}
export default stateVariable;
