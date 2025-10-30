const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const pool = require('../utils/db')
const config = require('../utils/config')
const result = require('../utils/result')

const router = express.Router()

router.get('/', (req, res) => {
    const sql = `SELECT * FROM users`
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.post('/signup', async (req, res) => {
    const sql = `INSERT INTO users(name,email,password,mobile) VALUES(?,?,?,?)`
    const { name, email, password, mobile } = req.body
    try {
        const hashPassword = await bcrypt.hash(password, config.saltRound)
        pool.query(sql, [name, email, hashPassword, mobile], (error, data) => {
            res.send(result.createResult(error, data))
        })
    } catch (error) {
        res.send(result.createResult(error))
    }
})

router.post('/signin', (req, res) => {
    const sql = `SELECT * FROM users WHERE email=?`
    const { email, password } = req.body
    pool.query(sql, [email], async (error, data) => {
        if (data.length == 0)
            res.send(result.createResult('Invalid Email'))
        else {
            const userData = data[0]
            try {
                const passwordMatched = await bcrypt.compare(password, userData.password)
                if (passwordMatched) {
                    // Create a payload which will carry the data which is in encrypted form
                    const payload = { uid: userData.uid }
                    // To encrypt the payload data use the jwt.sign() and use the secret to sign
                    const token = jwt.sign(payload, config.secret)
                    // send the entire user information
                    const user = {
                        token,
                        name: userData.name,
                        email: userData.email,
                        mobile: userData.mobile
                    }
                    res.send(result.createResult(null, user))
                }
                else
                    res.send(result.createResult('Invalid Password'))
            } catch (ex) {
                res.send(result.createResult(ex))
            }
        }
    })
})


// Authorization
router.delete('/', (req, res) => {
    const sql = `DELETE FROM users WHERE uid = ?`
    const bearertoken = req.headers.authorization
    if (bearertoken) {
        try {
            const token = bearertoken.split(' ')[1]
            const payload = jwt.verify(token, config.secret)
            const uid = payload.uid
            pool.query(sql, [uid], (error, data) => {
                res.send(result.createResult(error, data))
            })
        }
        catch (ex) {
            res.send(result.createResult('Invalid Token'))
        }
    }
    else
        res.send(result.createResult('Token in missing'))


})
module.exports = router