const matchObjectsKeys = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    for(const key of obj1Keys){
        if(!obj2Keys.includes(key)){
            throw new Error(`mismatched key: ${key}`);
        }
    }
    
}

const generateErrorMessage = key => {throw new Error `Invalid value for ${key}`}

module.exports = {matchObjectsKeys, generateErrorMessage}