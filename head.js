const assertEqual = require('./assertEqual')
//const assertEqual = require('./assertEqual')
const head = function(array1) {
  //let array1 = ['ball','love','spoon', 44];
  //for (let j = 0; j < array1.length; j++) {}
  
   return array1[0];
  

}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//console.log(head([8,8,6,7]));
assertEqual(head(['🔥',6,7]), 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head(['😍', '😇', '45', 'real','bird']), 5);
assertEqual((head(['🍕',6,7])),9)
assertEqual(head(["hello", "lighthouse", "Labs"]), "Hello September");

module.export = head;