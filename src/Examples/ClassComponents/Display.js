import React, { Component } from "react";
class Display extends Component {
  render() {
    return (
      <div>
        {this.props.data.map((product) => (
          <li>{product.title}</li>
        ))}
      </div>
    );
  }
}

export default Display;
