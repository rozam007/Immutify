const {Validator} = require('./Validator');
const { validateMinMax } = require('../Utilities');

class NumberValidator extends Validator {
  range({ min, max }) {
    validateMinMax({ min, max });
    return {
      validate: (value) =>
        typeof value === "number" && value >= min && value <= max,
    };
  }
}

module.exports = {NumberValidator};
