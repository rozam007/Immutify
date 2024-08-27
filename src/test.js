const { type } = require("./core/index")
const { validateMinMax } = require("./Utilities/index")
const {validate} = require("./core/Validator/ObjectValidator")

const object = {
    id: 1,
    name: 'rozam',
    
    age: 24,
    city: 'gujranwala',
    married: false
} 

const validators = {
    id: type(Number),
    name: type(String).length({min: 5, max:20}),
    age: type(Number).range({max: 85, min: 18}),
    city: type(String),
    married: type(Boolean)
}

const proxy = validate(object, validators)

console.log(proxy.age = 25)
console.log(type(Number).range({min: 80, max: 40}))