'use strict';

var _validator = require('validator.js');

var _lodash = require('lodash');

var _enums = require('../../src/enums');

var _verificationViaAssert = require('../../src/asserts/verification-via-assert');

var _verificationViaAssert2 = _interopRequireDefault(_verificationViaAssert);

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extend Assert with `VerificationVia`.
 */

const Assert = _validator.Assert.extend({ VerificationVia: _verificationViaAssert2.default });

/**
 * Test `VerificationViaAssert`.
 */

/**
 * Module dependencies.
 */

describe('VerificationViaAssert', () => {
  it('should throw an error if the verification via is not a string', () => {
    [[], {}, 123].forEach(via => {
      try {
        new Assert().VerificationVia().validate(via);
        _should2.default.fail();
      } catch (e) {
        e.should.be.instanceOf(_validator.Violation);
        e.violation.value.should.equal('must_be_a_string');
      }
    });
  });

  it('should throw an error if the verification via is invalid', () => {
    try {
      new Assert().VerificationVia().validate('foobar');

      _should2.default.fail();
    } catch (e) {
      e.should.be.instanceOf(_validator.Violation);
      e.show().assert.should.equal('VerificationVia');
      e.show().violation.choices.should.eql((0, _lodash.values)(_enums.verificationVia));
    }
  });

  it('should accept a valid verification via', () => {
    new Assert().VerificationVia().validate(_enums.verificationVia.SMS);
  });
});