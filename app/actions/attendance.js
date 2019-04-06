// @flow
import { queryUsers, findOneAttendance, createAttendance, updateAttendance } from '../database'

export const ADD_ATTENDANCE = 'ADD_ATTENDANCE';
export const UPDATE_ATTENDANCE = 'UPDATE_ATTENDANCE';

export const addAttendance = (rfid_code) => {

  queryUsers(rfid_code).then(user => {
    if(user) {
      console.log('user exist: ', user);
      // TODO: 1 is temporary sched_id
      console.log('finding attendance... ')
      const schedule_id_temp = 2
      findOneAttendance(user, schedule_id_temp).then(attendance_result => {
        console.log('attendance result = ', attendance_result)
        if(attendance_result) {

          console.log('creating exit logs...')
          updateAttendance(user, 1).then(updated_attendance => {
            console.log('exit logs created!')
          })

        } else {

          console.log('creating entrance logs...')
          const attendance = {
            rf_id: user.rfid_code,
            role: user.role,
            is_active: true,
            schedule_id: schedule_id_temp,
            enter_log: Date.now(),
            exit_log: null
          }
          
          createAttendance(attendance).then(created_attendance => {
            console.log('attendance created: ', created_attendance)
          })
        }
      });
    } else {
      console.log('user does not exist');
    }
  })

  // return dispatch => {
  //   dispatch({ type: ADD_ATTENDANCE });
  // }
}