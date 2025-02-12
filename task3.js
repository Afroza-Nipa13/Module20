// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

let stringLetter = ['Tom', 'Tim', 'Tin', 'Tik', 'Tok'];
// let together ='';
//  for(let letter of stringLetter){
//     together = together + letter;
// }
// console.log(together);

//  using join
let sentence = stringLetter.join('');
console.log(sentence);