const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const connectDb = require('./config/db')
const Post = require('./models/Post')
// const signUpUsers = require('./Seed/seed')

//router imports
const postRouter = require('./routes/Post')
const authRouter = require('./routes/Auth')
// databse configuration

connectDb()

// seeding user to database

// signUpUsers()

// router middleware

// middleware
app.use(express.json())
app.use(cors())

app.use('', authRouter)
app.use('', postRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(PORT)
})

function print(stuff) {
  console.log(stuff)
}
