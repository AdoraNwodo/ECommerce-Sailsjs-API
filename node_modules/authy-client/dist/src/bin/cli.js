#!/usr/bin/env node
'use strict';

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-expressions */
_yargs2.default.commandDir('commands').demandCommand(1).env('AUTHY').option('key', { demand: true, describe: 'API Key', type: 'string' }).option('pretty', { default: true, demand: false, describe: 'Whether to print pretty results', type: 'boolean' }).global('key').global('pretty').help().argv;