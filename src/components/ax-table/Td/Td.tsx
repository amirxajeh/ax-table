import React, { Component } from "react";

class Td extends Component {


  render() {
    return (
      <td>{this.props.children}</td>
    )
  }
}

export default Td