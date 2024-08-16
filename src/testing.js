const {Validate} = require('./index')

const data = {
    name: "rozam",
    age: 24
}

const validators = {
    name: value => typeof value === 'string' && value.length > 0,
    age: value => typeof value === 'number' && value >= 18,
}

const proxy = new Validate(data, validators)

console.log('mutations: ', proxy.age = 14)

