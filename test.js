var assert=require('assert'),fs=require('fs'),analyze=require('./lib').analyze;
var input=fs.readFileSync('examples/input.txt','utf8');
var result=analyze(input);
assert(result && typeof result==='object');
console.log('Core tests passed');
assert.deepStrictEqual(JSON.parse(JSON.stringify(result)),result);

// The fixture should preserve the documented business result.
var out=analyze(input);
assert.strictEqual(out.attributes.title,'First post');assert.strictEqual(out.headings[0],'Hello');
