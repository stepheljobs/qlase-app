// @flow
export const ADD_ATTENDANCE = 'ADD_ATTENDANCE';

export function addAttendance (attendance) {
  return dispatch => {
    dispatch({ type: ADD_ATTENDANCE, payload: attendance });
  }
}