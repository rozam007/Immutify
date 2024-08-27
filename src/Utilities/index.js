const matchObjectsKeys = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  for (const key of obj1Keys) {
    if (!obj2Keys.includes(key)) {
      throw new Error(`mismatched key: ${key}`);
    }
  }
};

const generateErrorMessage = key => {
  throw new Error(`Invalid value for ${key}`);
};

const validateMinMax = ({max, min}) => {
    if (min === max) throw new Error(`min: ${min} and max: ${max} cannot be same`)
    if (min > max) throw new Error(`min: ${min} cannot be greater than max: ${max}`)
    if (max < min) throw new Error(`max: ${max} cannot be smaller than min: ${min}`)    
    return
}

module.exports = { matchObjectsKeys, generateErrorMessage, validateMinMax };
