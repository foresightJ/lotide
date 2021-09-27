const assertEqual = require('./assertEqual')
const words = ["Yo Yo", "Lighthouse", "Labs"];
//const assertEqual = require('./assertEqual');
const tail = function(array1) {
  //let array1 = ['ball','love','spoon', 44];
  //for (let j = 0; j < array1.length; j++) {}
  // return array1[0];
  // coarray1[array1.length - 1])
  const newArr = array1.slice([1]);
  return newArr;
};
//console.log(tail(words));
assertEqual((words.legnth), 3);
//console.log(words);


module.exports = tail;





//  const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// console.log(tail(words));
// assertEqual(words.length, 3);