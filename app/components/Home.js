// @flow
import React, { Component } from 'react';
import { queryUsers } from '../database'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  Header1,
  Header2,
  TextGroup,
  Text,
  ClassInfoWrapper,
  DateHolder,
  WhiteBackground,
  Container,
  InputWrapper,
  InvisibleInput,
} from './style'

import AttendanceTable from './AttendanceTable'
import { addAttendance } from '../actions/attendance'

type Props = {};

export class Home extends Component<Props> {
  props: Props;

  componentDidMount() {
    this.attendanceInput.focus();
  }

  enterClass = (query) => {
    const attendance = {
      name: `${query.first_name} ${query.last_name}`,
      enter: Date.now(),
      exit: null,
      notes: '',
      rf_id: query.rfid_code
    }

    this.props.addAttendance(attendance)
  }

  onKeyPress = async (event) => {
    if (event.key === 'Enter') {
      const query = await queryUsers(event.target.value)
      this.enterClass(query)
      this.attendanceInput.value = ''
    }
  }

  render() {
    const { attendanceList } = this.props

    return (
      <Container>
        <WhiteBackground>
          <ClassInfoWrapper>
            <TextGroup>
              <Header1>Professor: </Header1>
              <Header2>Juan Dela Cruz</Header2>
            </TextGroup>
            <TextGroup>
              <Header1>Subject: </Header1>
              <Header2>MATH101</Header2>
            </TextGroup>
            <TextGroup>
              <Header1>Class: </Header1>
              <Header2>BSCS-1A</Header2>
            </TextGroup>
            <DateHolder>
              <Text size={16}>
                02/25/19 - 9:00 AM to 10:30AM
              </Text>
            </DateHolder>
          </ClassInfoWrapper>
          <InputWrapper>
            <InvisibleInput
              ref={(input) => { this.attendanceInput = input }}
              onKeyPress={ this.onKeyPress }
            />
          </InputWrapper>
          <AttendanceTable attendanceList={attendanceList}/>
        </WhiteBackground>
      </Container>
    );
  }
}

//redux binding from this point.
function mapStateToProps (state) {
  return {
    attendanceList: state.attendance.attendances
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ addAttendance }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)