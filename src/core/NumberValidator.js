const {Validator} = require('./Validator');
const { validateMinMax, validateProps } = require('../Utilities');

class NumberValidator extends Validator {
  range(props) {
    validateProps(props)
    const {min, max} = props;
    validateMinMax({ min, max });
    return {
      validate: (value) =>
        typeof value === "number" && value >= min && value <= max,
    };
  }
}

module.exports = {NumberValidator};
