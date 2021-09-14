const tail = function(array1) {
  //let array1 = ['ball','love','spoon', 44];
  //for (let j = 0; j < array1.length; j++) {}
  // return array1[0];
  // coarray1[array1.length - 1])
  const newArr = array1.slice([1]);
  return newArr;
};



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};



// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 3);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(tail(words));
assertEqual(words.length, 3);