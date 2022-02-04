import React, { Component } from "react";

import { ITableDataProps as IProps, ITableDataState as IState } from "../@types/Td";
import SortDownIcon from "../icons/SortDown";
import SortUpIcon from "../icons/SortUp";
import SortIcon from "./../icons/Sort";

import sortType from "./../icons/Sort";

import './Td.scss'

class Td extends Component<IProps, IState> {

  state: IState = {
    sortType: undefined
  }

  componentDidMount() {

    if (this.props.sort) {
      this.setState({
        sortType: 'default'
      })
    }
  }

  onClickHandler = () => {
    if (this.props.sort) {
      this.onSortHandler()
    }
  }

  onSortHandler = () => {
    console.log('sort')
  }

  get sortIcon() {
    if (this.state.sortType === 'default') {
      return <SortIcon />
    } else if (this.state.sortType === 'asce') {
      return <SortUpIcon />
    } else if (this.state.sortType === 'desc') {
      return <SortDownIcon />
    } else {
      return null
    }
  }

  render() {

    let children = this.props.children

    if (this.props.search) {
      children = <input
        onChange={(e) => this.props.onSearchHandler!(this.props.field, e.target.value)}
        placeholder="search ..." />
    }

    return (
      <td className={`${this.props.search && 'search-input'}`} onClick={() => this.onClickHandler()}>
        <div className={`td ${this.state.sortType && 'td-sort'}`}>
          {children}{this.sortIcon}
        </div>
      </td>
    )
  }
}

export default Td