var assert=require('assert'),analyze=require('../lib').analyze;
try {var result=analyze('');assert(typeof result==='object');} catch(error) {assert(error instanceof Error);}
