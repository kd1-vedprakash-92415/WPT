const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'kd1-vedprakash-92415',
  password: 'manager',
  database: 'foodordering_db'
})

module.exports = pool
