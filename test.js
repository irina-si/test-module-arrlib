const ArrayLib = require('./array_library.js');
const _ =  new ArrayLib();

function filterFunc(value) {
  return value >= 2;
}

console.log(_.chain([1, 3, 5]).take(3).filter(filterFunc).value());
console.log(_.filter([1, 3, 5], filterFunc));
console.log(_.take([1, 3, 5], 2));
