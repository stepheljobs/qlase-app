import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    Header1,
    Header2,
    TextGroup,
    ClassInfoWrapper,
  } from './style'

export default class ClassInfo extends Component {

  static propTypes = {
    professorName: PropTypes.string,
    subjectName: PropTypes.string,
    className: PropTypes.string,
  }

  static defaultProps = {
    professorName: '-',
    subjectName: '-',
    className: '-',
  }

  render() {
    return (
        <ClassInfoWrapper>
          <TextGroup>
            <Header1>Professor: </Header1>
            <Header2>{this.props.professorName}</Header2>
          </TextGroup>
          <TextGroup>
            <Header1>Subject: </Header1>
            <Header2>{this.props.subjectName}</Header2>
          </TextGroup>
          <TextGroup>
            <Header1>Class: </Header1>
            <Header2>{this.props.className}</Header2>
          </TextGroup>
      </ClassInfoWrapper>
    )
  }
}
