import React, { Component } from "react";
class StateExample extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello I am Gowtham",
    };
  }
  chnageEvent() {
    this.setState({
      message: "Hello I am Gowtham Safal",
    });
  }
  render() {
    return (
      <div>
        <h1> {this.state.message}</h1>
        <button onClick={() => this.chnageEvent()}>Change</button>
      </div>
    );
  }
}
export default StateExample;
