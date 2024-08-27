class Validator {
    constructor(constructor) {
      this.constructor = constructor;
    }
  
    validate(value) {
      return value instanceof this.constructor;
    }
  }

  module.exports = {Validator}