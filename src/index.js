class validate {
  constructor(target, validators) {
    this.target = target;
    this.validators = validators;

    return new Proxy(this.target, this.createHandler());
  }

  createHandler() {
    return {
      set: (target, key, value) => {
        if (this.validators[key]) {
          const isValid = this.validators[key](value);
          if (!isValid) {
            throw new TypeError(`Validation failed for key "${key}" with value "${value}".`);
          }
        } else {
          throw new ReferenceError(`No validator defined for key "${key}".`);
        }

        target[key] = value;
        console.log(`Value for key "${key}" has been updated to ${value}.`);
        return true;
      },
    };
  }
}

module.exports =  validate ;
