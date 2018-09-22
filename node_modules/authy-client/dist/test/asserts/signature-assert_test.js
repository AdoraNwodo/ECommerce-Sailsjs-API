'use strict';

var _validator = require('validator.js');

var _signatureAssert = require('../../src/asserts/signature-assert');

var _signatureAssert2 = _interopRequireDefault(_signatureAssert);

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extend Assert with `Logo`.
 */

const Assert = _validator.Assert.extend({ Signature: _signatureAssert2.default });

/**
 * Test `Signature`.
 */

/**
 * Module dependencies.
 */

describe('SignatureAssert', () => {
  it('should throw an error if `key` is missing', () => {
    try {
      new Assert().Signature();

      _should2.default.fail();
    } catch (e) {
      e.should.be.instanceOf(Error);
      e.message.should.equal('Key is missing');
    }
  });

  it('should throw an error if `request` is missing', () => {
    try {
      new Assert().Signature({ key: 'foo' });

      _should2.default.fail();
    } catch (e) {
      e.should.be.instanceOf(Error);
      e.message.should.equal('Request is missing');
    }
  });

  it('should throw an error if POST request is not authentic', () => {
    // jscs:disable validateOrderInObjectKeys
    try {
      new Assert().Signature({
        key: 'foo',
        request: {
          body: {
            foo: {
              bar: {
                biz: 'foo'
              }
            },
            qux: 'net'
          },
          headers: {
            host: 'foo.bar',
            'x-authy-signature': 'uq/wB8AR1Acvn0wFcjm7mmBJyR11nuuMhMy6semsAO8=',
            'x-authy-signature-nonce': 1455825429
          },
          method: 'POST',
          protocol: 'https',
          url: '/'
        }
      }).validate('foo');

      _should2.default.fail();
    } catch (e) {
      e.should.be.instanceOf(_validator.Violation);
      e.show().assert.should.equal('Signature');
    }
  });

  it('should accept a GET request', () => {
    new Assert().Signature({ key: 'foo', request: { method: 'GET' } }).validate('bar');
  });

  it('should accept a POST request', () => {
    new Assert().Signature({
      key: 'foo',
      request: {
        body: {
          foo: {
            bar: {
              biz: 'foo'
            }
          },
          qux: 'net'
        },
        headers: {
          host: 'foo.bar',
          'x-authy-signature': 'uq/wB8AR1Acvn0wFcjm7mmBJyR11nuuMhMy6semsAO8=',
          'x-authy-signature-nonce': 1455825429
        },
        method: 'POST',
        protocol: 'https',
        url: '/'
      }
    }).validate('uq/wB8AR1Acvn0wFcjm7mmBJyR11nuuMhMy6semsAO8=');
  });

  it('should encode spaces as + instead of %20', () => {
    new Assert().Signature({
      key: 'foo',
      request: {
        body: {
          foo: {
            bar: {
              biz: 'foo bar'
            }
          },
          qux: 'net'
        },
        headers: {
          host: 'foo.bar',
          'x-authy-signature': '+fyGys+d5yNJx9SpeKZdf+N77od1t1cC/fVSWDW2+kY=',
          'x-authy-signature-nonce': 1455825429
        },
        method: 'POST',
        protocol: 'https',
        url: '/'
      }
    }).validate('+fyGys+d5yNJx9SpeKZdf+N77od1t1cC/fVSWDW2+kY=');
  });
});