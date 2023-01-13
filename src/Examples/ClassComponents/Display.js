import React, { Component } from "react";
class Display extends Component {
  render() {
    return (
      <div>
        <table hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>ID</th>
              <th>UserId</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((product) => {
              return (
                <tr>
                  <td>{product.title}</td>
                  <td>{product.id}</td>
                  <td>{product.userId}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Display;
