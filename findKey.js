
   
const assertEqual = function(arr1, arr2) {
    const firstArr = JSON.stringify(arr1);
    const secondArr = JSON.stringify(arr2);

    if( arr1.length === 0 || arr2.length === 0){
        return ''
    }

    if (arr1.join('') === arr2.join('')){
      console.log(`Assertion Passed: ${firstArr} === ${secondArr}`)
    }
    else {
      console.log(`Assertion Failed: ${firstArr} !== ${secondArr}`)
    }
}
 

const findKey = function(object, callback) {
    for( property in object){
         if(callback(object[property])){
            return property
         }
    }
}

const obj = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
}

console.log(findKey(obj, x => x.stars === 2)) // => "noma"
