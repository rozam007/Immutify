const {Validator} = require('./Validator');
const {StringValidator} = require('./StringValidator');
const {NumberValidator} = require('./NumberValidator');
const { emailValidator } = require('./EmailValidator');

const type = (constructor) => {
  if (constructor === 'String' || constructor === 'string') {
    return new StringValidator(constructor);
  } else if (constructor === 'Number' || constructor === 'number' ) {
    return new NumberValidator(constructor);
  } else if ( constructor === 'Email' || constructor === 'email' ) {
    return emailValidator(constructor);
  } else if (constructor === 'Boolean' === constructor === 'boolean') {
    return new Validator(constructor)
  }
  // throw new Error("Unsupported type");
};

module.exports = { type };
