
let target = [
  {
    name: "rozam",
    city: "gujranwala",
    age: 24,
  },
  {
    name: "afaq",
    city: "gujranwala",
    age: 22,
  },
  {
    name: "adil",
    city: "gujranwala",
    age: 27,
  },
];

target = target.map(person => new Proxy(person, {
    get: (target, prop) => {
        if(prop in target){
            if(prop === 'age'){
                if(target[prop] >= 0 && target[prop] <= 24){
                    return target[prop]
                }
                else{
                    return new RangeError('Age is too high or too low')
                }
            }
        }
        else{
            throw new TypeError('Property not found!!')
        }
    },
    set: (target, prop, receiver) => {
        if(prop in target){
            if(prop === 'age'){
                if(receiver > 30){
                    throw new RangeError('Age is too high')
                }
                if(receiver < 18){
                    throw new RangeError('Age is too low')
                }
            }
        }
    }
}))

target.forEach(person => {
    try {
        console.log('get age: ', person['age'])
    } catch (error) {
        console.log(error['name', error['message']])
    }
})

console.log('set age: ', target[0]['age'] = 50)

