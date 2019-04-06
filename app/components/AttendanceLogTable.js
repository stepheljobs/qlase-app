import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #FFFFFF;
  color: #000;
  width: calc(50% - 32px);
  border-radius: 4px;
  padding: 8px;
  border: 1px solid #CCC;
`

export default class AttendanceLogTable extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <Wrapper>
        AttendanceLogTable
      </Wrapper>
    )
  }
}
