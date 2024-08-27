# Immutify

Immutify is an open source javascript project aims to provide you easy to use api's to mutate your object with your customize validations

# How to run the project?

### step 1
npm install 
OR
yarn install

### step 2
npm run dev
OR
yarn dev

# How to Use the API

## Example
Here's a step-by-step example of how to use Immutify to validate and mutate objects.

### Step 1: Create an Object
Define your JavaScript object:

const object = {
    id: 1,
    name: 'rozam',
    age: 24,
    city: 'gujranwala',
    married: false
}

### Step 2: Import the type Function
Import the type function from Immutify:
import { type } from 'immutify';

Create a validation schema:
const validators = {
    id: type(Number),
    name: type(String).length({min: 5, max:20}),
    age: type(Number).range({max: 85, min: 18}),
    city: type(String),
    married: type(Boolean)
}

### Step 3: Import the validate Function
Import the validate function from Immutify:
import { validate } from 'immutify';

const proxy = validate(object, validators);

### Step 4: Mutate the Object

proxy.age = 50;  // Valid change

proxy.age = 10;  // Throws an error (age must be between 18 and 85)








