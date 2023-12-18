const express = require('express')
const Router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')

const { signUpValidator } = require('../middleware/validation-middleware') //to validate input

// format - >name email password location

// signup or create new user

Router.post('/signup', signUpValidator, async (req, res) => {
  const { name, email, password, location } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  console.log(hashedPassword)

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

module.exports = Router
