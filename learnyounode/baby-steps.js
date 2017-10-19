// my solution

let result = 0;

for (let i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i])
}

console.log(result);


// official solution
//
// var result = 0
//
// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }
//
// console.log(result)
