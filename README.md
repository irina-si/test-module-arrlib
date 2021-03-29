Project Name
ES6 based array library providing basic array methods in JavaScript with an option of chaining.

Installation
Using npm:

$ npm i -g npm
$ npm i test-module-arrlib

Usage
In Node.js:

const ArrayLib = require('./array_library.js');
const _ =  new ArrayLib();

The library provides a variety of array methods. Here is an example of the usage:
_.take([1, 2, 3], 2);
_.chain([1, 2, 3]).take(2).value();

Contributing
Fork it!
Create your feature branch: git checkout -b my-new-feature
Commit your changes: git commit -am 'Add some feature'
Push to the branch: git push origin my-new-feature
Submit a pull request :D
