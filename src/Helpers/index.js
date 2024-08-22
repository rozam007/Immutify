
const type = constructor => {
    return {
        validate: value => value instanceof constructor
    };
};

const length = ({ min, max }) => {
    return {
        validate: value => typeof value === 'string' && value.length >= min && value.length <= max
    };
};

const greaterThan = min => {
    return {
        validate: value => typeof value === 'number' && value > min
    };
};

const smallerThan = max => {
    return {
        validate: value => typeof value === 'number' && value < max
    };
};

module.exports = {type, length, greaterThan, smallerThan}