const { validateMinMax } = require('../Utilities');
const {Validator} = require('./Validator');

class StringValidator extends Validator {
  length({ min, max }) {
    validateMinMax({ min, max });
    return {
      validate: (value) =>
        typeof value === "string" && value.length >= min && value.length <= max,
    };
  }

  matches(conditions) {
    let regexParts = [];

    if (conditions.letters) {
        regexParts.push('(?=.*[a-zA-Z])');
    }

    if (conditions.numbers) {
        regexParts.push('(?=.*\\d)');
    }

    if (conditions.specialChars && conditions.specialChars.length > 0) {
        const escapedChars = conditions.specialChars.map(char =>
            char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        ).join('');
        regexParts.push(`(?=.*[${escapedChars}])`);
    }

    const regex = new RegExp(`^${regexParts.join('')}.+$`);

    return {
        validate: (value) => typeof value === "string" && regex.test(value),
    };
}
}

module.exports = {StringValidator};