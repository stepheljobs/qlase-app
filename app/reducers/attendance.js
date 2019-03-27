import { ADD_ATTENDANCE } from '../actions/attendance';

const INITIAL_STATE = {
  attendances: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ATTENDANCE:
      const attendanceDeepCopy = JSON.parse(JSON.stringify(state.attendances));
      attendanceDeepCopy.push(action.payload)
      return { ...state, attendances: attendanceDeepCopy }
    default:
      return state;
  }
}
