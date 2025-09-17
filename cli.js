#!/usr/bin/env node
'use strict';
var fs=require('fs'), analyze=require('./lib').analyze;
var args=process.argv.slice(2), file=args[0];
if(!file){console.error('Usage: node cli.js FILE');process.exit(2);}
var source;try {source=fs.readFileSync(file==='-'?0:file,'utf8');}
catch(error){console.error('Cannot read input: '+error.message);process.exit(2);}
try { console.log(JSON.stringify(analyze(source),null,args.indexOf('--pretty')!==-1?2:0)); }
catch(error){console.error('Invalid input: '+error.message);process.exitCode=2;}
