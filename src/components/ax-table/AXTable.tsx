import React, { Component } from "react";

import './AXTable.scss'

class AXTable extends Component {


  render() {
    return (
      <div className="ax-table-container">
        <table className="ax-table">

          <thead className="table-head">
            <tr >
              <td>name</td>
              <td>age</td>
              <td>family</td>
            </tr>

          </thead>

          <tbody className="table-body">
            <tr>
              <td>amir</td>
              <td>23</td>
              <td>xajeh</td>
            </tr>

            <tr>
              <td>sara</td>
              <td>25</td>
              <td>xajeh</td>
            </tr>

            <tr>
              <td>coco</td>
              <td>3</td>
              <td>chanel</td>
            </tr>
          </tbody>

        </table>
      </div>
    )
  }
}

export default AXTable