import Trilogy from 'trilogy'

const database = new Trilogy('./file.db', {
  client: 'sql.js'
})

let user, attendance

// seeding fake database
;(async function () {

  const schedules = await database.model('schedules', {
    professor: String,
    subject: String,
    start_date: Date,
    end_date: Date,
    status: String,
    attendances: Array,
    id: Number
  })

  user = await database.model('user', {
    id: Number,
    rfid_code: Number,
    first_name: String,
    last_name: String,
    role: String,
    is_active: Boolean,
  })

  attendance = await database.model('attendance', {
    id: 'increments',
    rfid_code: Number,
    role: String,
    is_active: Boolean,
    schedule_id: Number,
    enter_log: Date,
    exit_log: Date,
  })
  
   await schedules.create({
    professor: 'Joel Pagaspas',
    subject: 'MATH124',
    start_date: new Date('May 23, 2016'),
    end_date: new Date('May 24, 2016'),
    status: 'finished',
    attendances: [],
    id: 1
  })

  await schedules.create({
    professor: 'Mon Baesa',
    subject: 'COMSCI102',
    start_date: Date.now(),
    end_date: Date.now(),
    status: 'in_progress',
    attendances: [],
    id: 2
  })

  // Professor
  await user.create({
    id: 1,
    rfid_code: 3112381197,
    first_name: 'Joel',
    last_name: 'Pagaspas',
    role: 'professor',
    is_active: true,
  })

  // Student 1
  await user.create({
    id: 2,
    rfid_code: 2040750073,
    first_name: 'Manel',
    last_name: 'Sy',
    role: 'student',
    is_active: true,
  })

  // Student 2
  await user.create({
    id: 3,
    rfid_code: 2040703411,
    first_name: 'Manalo',
    last_name: 'Uy',
    role: 'student',
    is_active: true,
  })
})()

export async function queryUsers (rfid_code) {
  const query = await user.findOne({ rfid_code: rfid_code })
  return query;
}

export async function findOneAttendance (user, schedule_id) {
  const result = await attendance.findOne({ rfid_code: user.rfid_code, schedule_id: schedule_id })
  return result
}

export async function createAttendance (attendance_input) {
  const result = await attendance.create(attendance_input)
  return result
}

export async function updateAttendance (user, schedule_id) {
  console.log('updating attendance...')
  const exitLog = Date.now()
  const rowsAffected = await attendance.update({ rfid_code: user.rfid_code, schedule_id: schedule_id }, { exit_log: exitLog })
  console.log('rows updated = ', rowsAffected)
  return rowsAffected
  
}

export default database;