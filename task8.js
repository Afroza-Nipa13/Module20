/*
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['Rahim', 'Karim', 'Yusuf, 'Ibrahim', 'Jabir']

Output:

['Jabir', 'Ibrahim', 'Yusuf', 'Karim', 'Rahim']
*/
const colors = ['Rahim', 'Karim', 'Yusuf', 'Ibrahim', 'Jabir'];
let rev_color =[];
// for(const color of colors){
//     console.log(color);
//     rev_color.unshift(color);


// }
// console.log(rev_color);
let i = colors.length -1;
while(i >= 0){
    
    rev_color.push(colors[i]);
    i--;

}

console.log(rev_color);