import React, { Component } from "react";
import { IData } from "./@types/Data";

import { IAXTableProps as IProps } from "./@types/Props";

import './AXTable.scss'
import Tr from "./Tr/Tr";

class AXTable extends Component<IProps> {

  prepareHead() {

    const labels: IData = {}
    for (const column of this.props.columns) {
      labels[column.field] = column.field
    }

    return <Tr columns={this.props.columns} data={labels}></Tr>
  }


  prepareBody() {
    const bodyElements: JSX.Element[] = []
    for (const item of this.props.items) {
      bodyElements.push(<Tr columns={this.props.columns} data={item}></Tr>)
    }

    return { bodyElements }
  }


  render() {
    return (
      <div className="ax-table-container">
        <table className="ax-table">

          <thead className="table-head">
            {this.prepareHead()}
          </thead>


          <tbody className="table-body">
            {this.prepareBody()}
          </tbody>

        </table>
      </div>
    )
  }
}

export default AXTable