import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 8px;
  display: flex;
  width: calc(50% - 32px);
  border: 1px solid #CCC;
  justify-content: space-between;
`

const Text = styled.span`
  color: #707070;
  padding: 8px;
`
const Button = styled.button`
  padding: 8px;
  border-radius: 4px;
  background-color: #7E69FA;
  color: #FFFFFF;
`

export default class LogNotes extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <Wrapper>
        <Text>Attendance Logs</Text>
        <Button>Add Notes</Button>
      </Wrapper>
    )
  }
}
