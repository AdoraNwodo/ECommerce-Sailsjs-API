'use strict';

var _validator = require('validator.js');

var _authyIdAssert = require('../../src/asserts/authy-id-assert');

var _authyIdAssert2 = _interopRequireDefault(_authyIdAssert);

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extend Assert with `AuthyId`.
 */

const Assert = _validator.Assert.extend({ AuthyId: _authyIdAssert2.default });

/**
 * Test `AuthyIdAssert`.
 */

/**
 * Module dependencies.
 */

describe('AuthyIdAssert', () => {
  it('should throw an error if authy id is not a string nor a number', () => {
    [{}, []].forEach(authyId => {
      try {
        new Assert().AuthyId().validate(authyId);

        _should2.default.fail();
      } catch (e) {
        e.should.be.instanceOf(_validator.Violation);
        e.show().violation.value.should.equal('must_be_a_string_or_number');
      }
    });
  });

  it('should throw an error if authy id is not numeric', () => {
    ['', 'foobar', '.123457', 'X1234567'].forEach(authyId => {
      try {
        new Assert().AuthyId().validate(authyId);

        _should2.default.fail();
      } catch (e) {
        e.should.be.instanceOf(_validator.Violation);
        e.show().violation.value.should.equal('must_be_numeric');
      }
    });
  });

  it('should accept a valid authy id', () => {
    [1234567, '0123456'].forEach(authyId => {
      new Assert().AuthyId().validate(authyId);
    });
  });
});