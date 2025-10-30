const express = require('express')
const router = express.Router()
const db = require('../utils/db')
const createResult = require('../utils/result')
const bcrypt = require('bcrypt')
const encConfig = require('../utils/encconfig')
const jwt = require('jsonwebtoken')

// users endpoints

// 1: POST /users - Register New User
// Request Body: { name, email, password, confirmPassword, mobile }
// Validation: Check if passwords match, email doesn't exist
// SQL: INSERT INTO users (name, email, password, mobile) VALUES (?, ?, ?, ?)
// Response: User object or error
router.post('/', async (req, res, next) => {
    if(req.body.password !== req.body.confirmPassword) // server side validation
        return res.send(createResult('Passwords do not match', null))
    const sql = "INSERT INTO users (name, email, password, mobile) VALUES (?, ?, ?, ?)"
    const encPassword = await bcrypt.hash(req.body.password, encConfig.saltRound)
    db.query(sql, [req.body.name, req.body.email, encPassword, req.body.mobile], (err, result) => {
        if(err)
            return next(err)
        const user = { uid: result.insertId, name: req.body.name, email: req.body.email, mobile: req.body.mobile }
        res.send(createResult(null, user))
    })
})

// 2: GET /users/:id - Get User by ID
// Params: id
// SQL: SELECT uid, name, email, mobile FROM users WHERE uid = ?
// Response: User object (without password)
router.get('/:id', (req, res, next) => {
    const sql = "SELECT uid, name, email, mobile FROM users WHERE uid = ?"
    db.query(sql, [req.params.id], (err, result) => {
        if(err)
            return next(err)
        let user = null
        let error = err
        if(result.length > 0)
            user = result[0]
        else
            error = 'User not found'
        res.send(createResult(error, user))
    })
})

// 3: GET /users/byemail/:email - Get User by Email
// Params: email
// SQL: SELECT uid, name, email, mobile FROM users WHERE email = ?
// Response: User object (without password)
router.get('/byemail/:email', (req, res, next) => {
    const sql = "SELECT uid, name, email, mobile FROM users WHERE email = ?"
    db.query(sql, [req.params.email], (err, result) => {
        if(err)
            return next(err)
        let user = null
        let error = err
        if(result.length > 0)
            user = result[0]
        else
            error = 'User not found'
        res.send(createResult(error, user))
    })
})

// 4: PUT /users - Update User Profile of current user
// Request Body: { name, mobile }
// SQL: UPDATE users SET name = ?, mobile = ? WHERE uid = ?
// Response: Success message or error
router.put('/', (req, res, next) => {
    const sql = "UPDATE users SET name = ?, mobile = ? WHERE uid = ?"
    db.query(sql, [req.body.name, req.body.mobile, req.curuser.uid], (err, result) => {
        if(err)
            return next(err)
        if(result.affectedRows == 0)
            return res.send(createResult('User not found', null))
        res.send(createResult(null, 'Profile updated'))
    })
})

// 5: DELETE /users - Delete User account of current user
// Params: id
// SQL: DELETE FROM users WHERE uid = ?
// Response: Success message or error
router.delete('/', (req, res, next) => {
    const sql = "DELETE FROM users WHERE uid = ?"
    db.query(sql, [req.curuser.uid], (err, result) => {
        if(err)
            return next(err)
        if(result.affectedRows == 0)
            return res.send(createResult('User not found', null))
        res.send(createResult(null, 'User deleted'))
    })
})

// 6: PATCH /users/password - Change Password of current user
// Request Body: { password }
// SQL: UPDATE users SET password = ? WHERE uid = ?
// Response: Success message or error
router.patch('/password', async (req, res, next) => {
    const sql = "UPDATE users SET password = ? WHERE uid = ?"
    const encPassword = await bcrypt.hash(req.body.password, encConfig.saltRound)
    db.query(sql, [encPassword, req.curuser.uid], (err, result) => {
        if(err)
            return next(err)
        if(result.affectedRows == 0)
            return res.send(createResult('User not found', null))
        res.send(createResult(null, 'Password changed'))
    })
})

// Response: Success message
// 7: POST /users/authenticate - Login (No JWT yet)
// Request Body: { email, passwd }
// SQL: SELECT uid, name, email FROM users WHERE email = ?
// Response: User object (simple authentication without token)
router.post('/authenticate', (req, res, next) => {
    const sql = "SELECT uid, name, email, mobile, password FROM users WHERE email = ?"
    db.query(sql, [req.body.email], async (err, result) => {
        if(err)
            return next(err)
        let user = null
        let error = err
        let passwordMatched = false
        if(result.length > 0) {
            passwordMatched = await bcrypt.compare(req.body.passwd, result[0].password)
            if(passwordMatched) {
                user = result[0]
                delete user.password // do not send passwd to client
                // Create a payload which will carry the data which is in encrypted form
                const payload = { uid: user.uid, email: user.email }
                // To encrypt the payload data use the jwt.sign() and use the secret to sign
                user.token = jwt.sign(payload, encConfig.secret)
            }
        }
        if(!passwordMatched)
            error = 'Invalid email or password'
        res.send(createResult(error, user))
    })
})

module.exports = router
