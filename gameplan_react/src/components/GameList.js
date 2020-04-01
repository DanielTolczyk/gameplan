import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

class GameList extends React.Component {

  render() {
    return (
      <div>
        <BootstrapTable data={this.props.games}>
          <TableHeaderColumn isKey dataField='id'> ID </TableHeaderColumn>
          <TableHeaderColumn dataField='name'> Name </TableHeaderColumn>
          <TableHeaderColumn dataField='player_count'> Number of Players </TableHeaderColumn>
          <TableHeaderColumn dataField='length'> Length of Play </TableHeaderColumn>
          <TableHeaderColumn dataField='description'> Description </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default GameList;