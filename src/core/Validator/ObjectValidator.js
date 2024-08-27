const { matchObjectsKeys, generateErrorMessage, validateMinMax } = require("../../Utilities");

const validate =  (object, validators) => {
   matchObjectsKeys(object, validators);

  const handler = {
    set: (target, prop, value) => {
      if (validators[prop]) {
        const validator = validators[prop];
        const valid = validator.validate(value);
        console.log('valid: ', valid)
        if (!valid) generateErrorMessage(prop);
      }
      target[prop] = value;
      return true;
    },
  };

    return new Proxy(object, handler); 
};

module.exports = {validate};
