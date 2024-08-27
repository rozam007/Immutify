const {Validator} = require('./Validator');
const {StringValidator} = require('./StringValidator');
const {NumberValidator} = require('./NumberValidator');

const type = (constructor) => {
  if (constructor === String) {
    return new StringValidator(constructor);
  } else if (constructor === Number) {
    return new NumberValidator(constructor);
  } else if (constructor === Boolean) {
    return new Validator(constructor);
  }
  throw new Error("Unsupported type");
};

module.exports = { type };
