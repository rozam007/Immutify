const matchObjectsKeys = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = OBject.keys(obj2);

    for(const key of obj1Keys){
        if(!obj2Keys.includes(key)){
            throw new Error("keys mistached between target object and validator object!!");
        }
    }
    
}

const generateErrorMessage = key => `Invalid value for ${key}`

module.exports = {matchObjectsKeys, generateErrorMessage}