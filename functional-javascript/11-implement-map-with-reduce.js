// second attempt
module.exports = function arrayMap(arr, fn) {
  var result = [];
  arr.reduce(function(prev, curr, index, arr) {
  	result.push(fn(curr));
  }, null);
  return result;
}

// initial attempt
// module.exports = function arrayMap(arr, fn) {
//   return arr.reduce(function(acc, item, index, arr) {
//     return acc.concat(fn(item, index, arr))
//   }, [])
// }

// official solution
//
// module.exports = function arrayMap(arr, fn, thisArg) {
//   return arr.reduce(function(acc, item, index, arr) {
//     acc.push(fn.call(thisArg, item, index, arr))
//     return acc
//   }, [])
// }
