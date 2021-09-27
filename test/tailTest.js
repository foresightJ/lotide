const assertEqual = require('../assertEqual')
const tail = require('../tail')
const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
console.log(tail(words));
//assertEqual(, 3);