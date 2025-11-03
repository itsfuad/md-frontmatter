var assert=require('assert'),fs=require('fs'),analyze=require('./lib').analyze;
var input=fs.readFileSync('examples/input.txt','utf8');
var result=analyze(input);
assert(result && typeof result==='object');
console.log('Core tests passed');
assert.deepStrictEqual(JSON.parse(JSON.stringify(result)),result);
