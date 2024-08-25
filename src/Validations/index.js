const { matchObjectsKeys, generateErrorMessage } = require("../Utilities");

const validate =  (object, validators) => {
   matchObjectsKeys(object, validators);

  const handler = {
    set: (target, prop, value) => {
      if (validators[prop]) {
        const validator = validators[prop];
        const valid = validator.validate(value);
        if (!valid) generateErrorMessage(prop);
      }
      target[prop] = value;
      return true;
    },
  };

  const proxy = new Proxy(object, handler);
  return proxy
};

module.exports = {validate};
