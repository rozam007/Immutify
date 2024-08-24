const { type } = require("./Helpers")
const {validate} = require("./Validations/index")

const object = {
    id: 1,
    name: 'rozam',
    age: 24,
    city: 'gujranwala',
    marrried: false
}

const validators = {
    id: type(Number),
    name: type(String).length({min: 5, max:20}),
    age: type(Number).range({gT: 18, sT: 85}),
    city: type(String),
    married: type(Boolean)
}

const proxy = validate(object, validators)

console.log(proxy.age = 89)