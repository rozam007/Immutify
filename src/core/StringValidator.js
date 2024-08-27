const {Validator} = require('./Validator');

class StringValidator extends Validator {
  length({ min, max }) {
    return {
      validate: (value) =>
        typeof value === "string" && value.length >= min && value.length <= max,
    };
  }
}

module.exports = {StringValidator};