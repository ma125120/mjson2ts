#! /usr/bin/env node

const gen = require('../lib/index')
const program = require('commander');
const fs = require('fs-extra');
const path = require('path');

program
  .option('-c, --config <type>', 'config file')
  .parse(process.argv);

const CD = process.cwd();
const Config = program.config || 'tsg1.js';
const ConfigFile = path.join(CD, Config);

if (!fs.existsSync(ConfigFile)) {
  console.error(`[ERROR]: ${Config} not found in ${CD}`);
} else {
  const config = require(ConfigFile);
  gen(config);
}
