const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const emailValidator = (value) => {
  return {
    validate: (value) => {
      return emailRegex.test(value);
    },
  };
};

module.exports = { emailValidator };
