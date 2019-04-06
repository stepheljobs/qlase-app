import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment/src/moment'
import styled, { keyframes } from 'styled-components'


const Wrapper = styled.div`
  color: #4E4E4E;
  text-align: right;
  margin: 8px;
`
const Status = styled.div`
  font-size: 2em;
`
const Date = styled.div`
  font-size: 1em;
`

const TapToStart = styled.div`
  background-color: #4BC654;
  text-align: center;
  padding: 4px;
  border-radius: 4px;
  color: #ffffff;
  width: 240px;
`

const EndSession = styled.div`
  background-color: #FF6A6A;
  text-align: center;
  padding: 4px;
  border-radius: 4px;
  color: #ffffff;
  width: 240px;
  cursor: pointer;
`

const Confirmation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.div`
  color: #4E4E4E;
`

const Button = styled.button`
  background-color: #FF6A6A;
  color: #FFFFFF;
  border: 4px;
  padding: 8px;
  margin: 4px;
  border-radius: 4px;
  width: 80px;
  cursor: pointer;
`

const Saving = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Icon = styled.img`
  margin-right: 8px;
  animation: ${rotate} 2s linear infinite;
`

export default class StatusDate extends Component {
  static propTypes = {
    status: PropTypes.string,
    scheduleStart: PropTypes.number,
    scheduleEnd: PropTypes.number,
  }

  static defaultProps = {
    status: 'On Going',
    scheduleStart: 1554168983,
    scheduleEnd: 1554168983,
  }

  state = {
    steps: 2
  }

  clickEndSession = () => {
    this.setState({ steps: 3 })
  }

  cancelEndSession = () => {
    this.setState({ steps: 2 })
  }

  confirmEndSession = () => {
    this.setState({ steps: 4 })
  }

  renderSteps = () => {
    const { steps } = this.state

    if(steps === 1) {
      return <TapToStart>Tap RFID to Start Session</TapToStart>
    }

    if(steps === 2) {
      return <EndSession onClick={this.clickEndSession}>Click to End Session</EndSession>
    }

    if(steps === 3) {
      return <Confirmation>
        <Text>End Session?</Text>
        <Button alert onClick={this.confirmEndSession}>Yes</Button>
        <Button alert border onClick={this.cancelEndSession}>Cancel</Button>
      </Confirmation>
    }

    if(steps === 4) {
      return <Saving>
        <Icon id="loading" src='../app/images/sync-icon.svg' />
        <Text>Saving...</Text>
      </Saving>
    }

    return null
  }

  render() {
    return (
      <Wrapper>
        <Status>{`Status: ${this.props.status}`}</Status>
        { this.renderSteps() }
        <Date>{ moment(this.props.scheduleStart).format('llll') }</Date>
        <Date>{ moment(this.props.scheduleEnd).format('llll') }</Date>
      </Wrapper>
    )
  }
}
