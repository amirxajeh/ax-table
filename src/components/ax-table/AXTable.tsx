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

    let searchInput: JSX.Element | null = null
    if (this.hasSearchInput) {
      searchInput = <Tr
        key='search-header'
        search={true}
        columns={this.props.columns}
        data={labels}></Tr>
    }

    return <>
      <Tr
        columns={this.props.columns}
        data={labels}></Tr>
      {searchInput}
    </>
  }


  prepareBody() {
    let counter = 0
    const bodyElements: JSX.Element[] = []
    for (const item of this.props.items) {
      bodyElements.push(
        <Tr
          columns={this.props.columns}
          data={item}
          key={'data' + counter++}>
        </Tr>
      )
    }

    return bodyElements
  }


  get hasSearchInput() {
    for (const column of this.props.columns) {
      if (column.searchable) return true
    }
    return false
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