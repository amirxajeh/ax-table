import React, { Component } from "react";

import { ITableDataProps as IProps } from "../@types/Td";

class Td extends Component<IProps> {


  render() {

    let children = this.props.children
    if (this.props.search) {
      children = <input
        onChange={(e) => this.props.onSearchHandler!(this.props.field, e.target.value)}
        placeholder="search ..." />
    }

    return (
      <td className={`${this.props.search && 'search-input'}`}>{children}</td>
    )
  }
}

export default Td