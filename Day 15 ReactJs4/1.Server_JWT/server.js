const express = require('express')
const userRouter = require('./routes/user')
const courseRouter = require('./routes/courses')

const app = express()

//Middlewares
app.use(express.json())
app.use('/user', userRouter)
app.use('/course', courseRouter)



app.listen(4000, 'localhost', () => {
    console.log('Server started at port 4000')
})

