// var array = [3, 4, 2, 1, 7, 7, 4];
// max = array.length;
// var bray = array.sort();
// console.log(bray);
// var result = [];

// for (var i of bray) {
//   if ((bray[i] === bray[i + 1])&& bray[i]!==max) {
//     r = bray[i] + 1;
//     result.push(r);
//   }
// }
// console.log(result);
let input = [3, 4, 2, 2, 3, 8, 5];
let n = input.length;
var term = new Array(n + 1).fill(0);
console.log(term);
let output = [];
// console.log(term);
for (let i = 0; i < input.length; i++) {
  term[input[i]] = term[input[i]] + 1;
}
for (let i = 1; i <= input.length; i++) {
  if (term[i] == 0) {
    output.push(i);
  }
}
console.log(output);
