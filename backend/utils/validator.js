const Validator = require('validatorjs')

const validator = async (body, rules, customMessage, callback) => {
  const validation = new Validator(body, rules, customMessage, callback)

  validation.passes(() => callback(null, true))
  validation.fails(() => callback(validation.errors, false))
}

module.exports = validator
