import { render } from "@testing-library/react";
import React, { Component } from "react";
class counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("callback value", this.state.count);
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}
export default counter;
