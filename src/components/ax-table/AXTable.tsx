import React, { Component } from "react";
import { IData } from "./@types/Data";

import { IAXTableProps as IProps } from "./@types/Props";
import { IAXTableState as IState } from "./@types/State";

import './AXTable.scss'
import Tr from "./Tr/Tr";
import { Config } from "./utility/Config";

class AXTable extends Component<IProps, IState> {

  state: IState = {
    search: {}
  }

  constructor(props: IProps) {
    super(props)

    this.state.search = this.setInitialSearchOptions()
  }

  setInitialSearchOptions = () => {
    for (const column of this.props.columns) {
      if (column.searchable) {
        Config.setSearch(column.field)
      }
    }

    return Config.options.search
  }

  setSearchInputValue = (key: string, value = '') => {
    Config.setSearch(key, value)

    this.setState({
      search: Config.options.search
    })
  }

  prepareHead() {

    const labels: IData = {}
    for (const column of this.props.columns) {
      labels[column.field] = column.label
    }

    let searchInput: JSX.Element | null = null
    if (this.hasSearchInput) {
      searchInput = <Tr
        onSearchHandler={this.setSearchInputValue}
        key='search-header'
        search={true}
        columns={this.props.columns}
        data={labels}></Tr>
    }

    return <>
      <Tr
        columns={this.props.columns}
        head={true}
        data={labels}></Tr>
      {searchInput}
    </>
  }

  prepareBody() {
    let counter = 0

    const foundedItems = this.findSearchedItems()

    const bodyElements: JSX.Element[] = []
    for (const item of foundedItems) {
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

  findSearchedItems() {

    if (!this.hasActiveSearch) return this.props.items

    const foundedItems: IData[] = []

    for (const item of this.props.items) {
      let isContained = true

      for (const field in this.state.search) {
        if (!item[field].toString().includes(this.state.search[field])) {
          isContained = false
          break
        }
      }

      if (isContained) {
        foundedItems.push(item)
      }
    }

    return foundedItems

  }

  get hasSearchInput() {
    for (const column of this.props.columns) {
      if (column.searchable) return true
    }
    return false
  }

  get hasActiveSearch() {
    for (const field in this.state.search) {
      if (this.state.search[field].length) return true
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