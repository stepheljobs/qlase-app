import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Wrapper = styled.div`
  background-color: #FFFFFF;
  color: #000;
  width: calc(50% - 32px);
  border-radius: 4px;
  padding: 80px 8px;
  border: 1px solid #CCC;
`

const Button = styled.button`
  background-color: #4E4E4E;
  color: #FFFFFF
  border-radius: 4px;
  padding: 8px;
  font-size: 1em;
`

const Text = styled.p`
  color: #707070;
  font-size: 1em;
`

const Content = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
`
const Icon = styled.img``

export default class StudentListTable extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <Wrapper>
        <Content>
          <Icon id="loading" src='../app/images/sync-icon.svg' />
          <Text>Students are empty try syncing online to fetch the data.</Text>
          <Button>Sync all schedules</Button>
        </Content>
      </Wrapper>
    )
  }
}
