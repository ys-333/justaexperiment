const express = require('express')
const Router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

const {
  signUpValidator,
  logInValidator,
} = require('../middleware/validation-middleware') //to validate input

// format - >name email password location

// signup or create new user

Router.post('/signup', signUpValidator, async (req, res) => {
  const { name, email, password, location } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = new User({ name, email, password: hashedPassword, location })

  try {
    const response = await user.save()

    if (!response) {
      return res.status(500).send({
        success: false,
        message: 'Failed to save data',
        data: response,
      })
    }

    return res.status(201).send({
      success: true,
      message: 'User successfully created',
      data: response,
    })
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: 'Failed to save data in catch',
      data: err,
    })
  }
})

// to login user

Router.post('/login', logInValidator, async (req, res) => {
  console.log('login')
  const { email, password } = req.body

  const user = await User.findOne({ email: email })

  console.log(user)

  if (!user)
    return res
      .status(404)
      .send({ success: false, message: 'User do not exist', data: user })
  else {
    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword)
      return res.status(412).send({
        success: false,
        message: 'Check your email and password',
        data: isValidPassword,
      })

    return res.send({ success: true, message: 'Authenticated', user })
  }
  // verify password
})

module.exports = Router

// // we can not simply store the plain password - > we need to hashed it
//   inspite of algo like sha256 md1, and all sor tof of
// hashed +salt +
