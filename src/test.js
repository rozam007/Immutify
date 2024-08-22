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
    age: type(Number).greaterThan(18).smallerThan(75),
    city: type(String),
    married: type(Boolean)
}

const proxy = validate(object, validators)