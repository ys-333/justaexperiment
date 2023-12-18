const validator = require('../utils/validator')

const signUpValidator = async (req, res, next) => {
  const signUpRules = {
    name: 'required|string',
    email: 'required|email',
    password: 'required',
    location: 'required|string',
  }

  await validator(req.body, signUpRules, {}, (error, status) => {
    if (!status) {
      return res.status(412).send({
        success: false,
        message: 'Validation Failed',
        data: error,
      })
    } else next()
  }).catch((err) => console.log(err))
}

module.exports = { signUpValidator }
