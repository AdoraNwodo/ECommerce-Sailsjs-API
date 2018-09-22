'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obfuscate = obfuscate;

var _lodash = require('lodash');

/**
 * Instances.
 */

const key = 'X-Authy-API-Key';

/**
 * Export `RequestObfuscator`.
 */

/**
 * Module dependencies.
 */

function obfuscate(request) {
  if (!(0, _lodash.has)(request, `headers.${key}`)) {
    return request;
  }

  request.headers[key] = '*****';
}