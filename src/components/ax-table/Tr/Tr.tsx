import React, { Component } from "react";

import { ITableRow as IProps } from "../@types/Tr";
import Td from "../Td/Td";

class Tr extends Component<IProps> {

  prepareCells = () => {

    return this.props.columns.map(column => {
      return <Td key={this.props.data[column.field]}>{this.props.data[column.field]}</Td>
    })

  }

  render() {


    return (
      <tr>
        {this.prepareCells()}
      </tr>
    )
  }
}

export default Tr