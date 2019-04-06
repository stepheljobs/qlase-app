// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import {
  WhiteBackground,
  Container,
  InputWrapper,
  InvisibleInput,
} from './style'

import ClassInfo from './ClassInfo'
import StatusDate from './StatusDate'
import AttendanceTable from './AttendanceTable'
import { addAttendance } from '../actions/attendance'
import LogNotes from './LogNotes'
import SearchFilter from './SearchFilter'
import StudentListTable from './StudentListTable'
import AttendanceLogTable from './AttendanceLogTable'

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeaderGroup = styled.div`
  margin-bottom: 8px;
`
const TableGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

const StudentList = styled.div``
const StudentCard = styled.div`
  background-color: #FFFFFF;
`

const Text = styled.span``

export class Home extends PureComponent {

  componentDidMount() {
    // this.attendanceInput.focus();
  }

  // onKeyPress = async (event) => {
  //   if (event.key === 'Enter') {
  //     this.props.addAttendance(event.target.value)
  //     this.attendanceInput.value = ''
  //   }
  // }

  render() {
    const { attendanceList } = this.props

    return ( 
      <Container>
        <WhiteBackground>
          <HeaderGroup>
            <FlexContainer>
              <ClassInfo />
              <StatusDate />
            </FlexContainer>
            <FlexContainer>
              <SearchFilter />
              <LogNotes />
            </FlexContainer>
          </HeaderGroup>
          
          <TableGroup>
            <StudentListTable />
            <AttendanceLogTable />
          </TableGroup>
        </WhiteBackground>
      </Container>
    )

  }
}

//redux binding from this point.
function mapStateToProps (state) {
  return {
    attendanceList: state.attendance.attendances
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addAttendance,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)