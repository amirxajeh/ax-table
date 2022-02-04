import React, { Component } from "react";

import { ITableDataProps as IProps } from "../@types/Td";

import SortIcon from "./../icons/Sort";

import './Td.scss'

class Td extends Component<IProps> {


  render() {

    let children = this.props.children
    let sortIcon: JSX.Element | null = null

    if (this.props.sort) {
      sortIcon = <SortIcon />
    }

    if (this.props.search) {
      children = <input
        onChange={(e) => this.props.onSearchHandler!(this.props.field, e.target.value)}
        placeholder="search ..." />
    }

    return (
      <td className={`${this.props.search && 'search-input'}`}>
        <div className={`td ${sortIcon && 'td-sort'}`}>
          {children}{sortIcon}
        </div>
      </td>
    )
  }
}

export default Td