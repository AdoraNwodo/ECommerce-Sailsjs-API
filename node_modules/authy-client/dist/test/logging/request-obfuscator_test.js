'use strict';

var _lodash = require('lodash');

var _requestObfuscator = require('../../src/logging/request-obfuscator');

/**
 * Test `RequestObfuscator`.
 */

/**
 * Module dependencies.
 */

describe('RequestObfuscator', () => {
  describe('obfuscate()', () => {
    it('should ignore a request that does not include headers', () => {
      // A request object with type `response` won't have headers.
      const request = {};

      (0, _requestObfuscator.obfuscate)(request).should.equal(request);
    });

    it('should strip credentials from header', () => {
      const request = {
        headers: {
          'X-Authy-API-Key': 'foobar'
        }
      };

      (0, _requestObfuscator.obfuscate)(request);

      request.should.eql((0, _lodash.defaults)({ headers: { 'X-Authy-API-Key': '*****' } }, request));
    });
  });
});