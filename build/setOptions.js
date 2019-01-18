#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');

var fileName = __dirname + '/options.json';
var options = require(fileName);

options.isProduction = argv.mode == 'PRODUCTION';

fs.writeFile(fileName, JSON.stringify(options, null, 2), function (err) {
  if (err) return console.log(err);

  console.log('Setting options:');
  console.log(JSON.stringify(options));
});