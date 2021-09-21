const assertEqual = require('./assertEqual')
const head = function(array1) {
  //let array1 = ['ball','love','spoon', 44];
  //for (let j = 0; j < array1.length; j++) {}
  return array1[0];

}

// const assertEqual = function(actual, expected) {
//   if (actual === expected){
//     console.log(`Assertion Passed: ${actual} === ${expected}`)
//   }
//   else {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`)
//   }
// }



// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 3);


// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
head([5,6,7]);
assertEqual(head([5,6,7]), 5);
