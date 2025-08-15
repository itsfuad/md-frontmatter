/* Extract front matter and headings from Markdown articles. No runtime dependencies. */
'use strict';
function analyze(text) {

var lines=String(text).split(/\r?\n/), attributes={},body=lines;
if(lines[0]==='---'){
  var end=lines.indexOf('---',1);
  if(end>0){lines.slice(1,end).forEach(function(line){var i=line.indexOf(':');if(i>0)attributes[line.slice(0,i).trim()]=line.slice(i+1).trim();});body=lines.slice(end+1);}
}
var headings=body.filter(function(line){return /^#{1,6}\s/.test(line);}).map(function(line){return line.replace(/^#+\s*/, '');});
return {attributes:attributes,headings:headings,wordCount:body.join(' ').trim().split(/\s+/).filter(Boolean).length};
}
module.exports = { analyze: analyze };
