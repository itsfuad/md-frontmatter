var assert=require('assert'),cp=require('child_process');
var valid=cp.spawnSync(process.execPath,['cli.js','examples/input.txt'],{encoding:'utf8'});
assert.strictEqual(valid.status,0,valid.stderr);
assert(JSON.parse(valid.stdout));
var missing=cp.spawnSync(process.execPath,['cli.js','bad-file.txt'],{encoding:'utf8'});
assert.notStrictEqual(missing.status,0);
