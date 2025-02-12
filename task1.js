// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']



// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// console.log(colors);
// colors.reverse();
// console.log(colors);

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const rev_colors =[];
// for(const color of colors){
//     console.log(color);
//     rev_colors.unshift(color);
// }
// console.log(rev_colors);



let i = colors.length - 1;
let revColors = [];
while(i >= 0){

    revColors.push(colors[i]);
    i--;
}

console.log(revColors);
