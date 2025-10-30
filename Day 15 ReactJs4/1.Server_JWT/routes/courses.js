const express = require('express')
const pool = require('../utils/db')
const result = require('../utils/result')

const router = express.Router()

router.get('/', (req, res) => {
    const sql = `SELECT * FROM courses`
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

module.exports = router