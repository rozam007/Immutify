class Validator {
    constructor(constructor) {
        this.constructor = constructor;
    }

    validate(value) {
        return value instanceof this.constructor;
    }
}

class StringValidator extends Validator {
    length({ min, max }) {
        return {
            validate: (value) => typeof value === 'string' && value.length >= min && value.length <= max
        };
    }
}

class NumberValidator extends Validator {
    range({gT, sT}) {
        return {
            validate: value => typeof value === Number && value > gT && value < sT
        }
    }
}

const type = constructor => {
    if (constructor === String) {
        return new StringValidator(constructor);
    } else if (constructor === Number) {
        return new NumberValidator(constructor);
    } else if (constructor === Boolean) {
        return new Validator(constructor);
    }
    throw new Error('Unsupported type');
};

module.exports = {type}