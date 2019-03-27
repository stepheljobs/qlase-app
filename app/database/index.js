// import Trilogy from 'trilogy';

// export default new Trilogy('./file.db', {
//   client: 'sql.js'
// });

import Trilogy from 'trilogy'

const database = new Trilogy('./file.db', {
  client: 'sql.js'
})

let schoolUsers

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

   await schedules.create({
    professor: 'Joel Pagaspas',
    subject: 'MATH123',
    start_date: new Date('May 23, 2016'),
    end_date: new Date('May 24, 2016'),
    status: 'in_progress',
    attendances: [],
    id: 1
  })

  schoolUsers = await database.model('school_users', {
    id: Number,
    rfid_code: Number,
    first_name: String,
    last_name: String,
    role: String,
    is_active: Boolean,
  })

  // Professor
  await schoolUsers.create({
    id: 1,
    rfid_code: 3112381197,
    first_name: 'Joel',
    last_name: 'Pagaspas',
    role: 'professor',
    is_active: true,
  })

  // Student 1
  await schoolUsers.create({
    id: 2,
    rfid_code: 2040750073,
    first_name: 'Manel',
    last_name: 'Sy',
    role: 'student',
    is_active: true,
  })

  // Student 2
  await schoolUsers.create({
    id: 3,
    rfid_code: 2040703411,
    first_name: 'Manalo',
    last_name: 'Uy',
    role: 'student',
    is_active: true,
  })
})()

export async function queryUsers (rfid_value) {
  const query = await schoolUsers.findOne({ rfid_code: rfid_value })
  return query;
}

export default database;