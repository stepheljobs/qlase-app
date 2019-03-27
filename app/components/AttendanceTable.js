import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactTable from 'react-table'
import styled from 'styled-components'

// static table headers
const columns = [{
  Header: 'Name',
  accessor: 'name'
}, {
  Header: 'Enter',
  accessor: 'enter',
  render: props => <span className='number'>{props.value}</span>
}, {
  Header: 'Exit',
  accessor: 'exit',
}, {
  Header: 'Notes',
  accessor: 'notes',
}]

const TableWrapper = styled.div`
  padding: 24px;

  .rt-tr {
    display: flex;
  }

  .rt-thead {
    background-color: white;
    color: #707070;
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 16px;
  }

  .rt-tr-group {
    background-color: white;
    color: #707070;
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 8px;
  }
`

export default class AttendanceTable extends Component {

  render() {
    return (
      <TableWrapper>
        <ReactTable
          data={this.props.attendanceList}
          columns={columns}
          minRows={1}
          showPagination={false}
        />
      </TableWrapper>
    )
  }
}
