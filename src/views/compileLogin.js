const pug = require('pug');
const compiledFunction = pug.compileFile('login.pug');

console.log(compiledFunction());