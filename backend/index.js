const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const connectDb = require('./config/db')
const Post = require('./models/Post')

//router imports
const postRouter = require('./routes/Post')
// databse configuration

connectDb()

// router middleware

// middleware
app.use(express.json())
app.use(cors())

app.use('', postRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(PORT)
})

function print(stuff) {
  console.log(stuff)
}
