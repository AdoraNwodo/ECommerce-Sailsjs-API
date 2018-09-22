'use strict';

var _validator = require('validator.js');

var _totpTokenAssert = require('../../src/asserts/totp-token-assert');

var _totpTokenAssert2 = _interopRequireDefault(_totpTokenAssert);

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extend Assert with `TotpToken`.
 */

const Assert = _validator.Assert.extend({ TotpToken: _totpTokenAssert2.default });

/**
 * Test `TotpTokenAssert`.
 */

/**
 * Module dependencies.
 */

describe('TotpTokenAssert', () => {
  it('should throw an error if the token is not a string nor a number', () => {
    [[], {}].forEach(choice => {
      try {
        new Assert().TotpToken().validate(choice);

        _should2.default.fail();
      } catch (e) {
        e.should.be.instanceOf(_validator.Violation);
        e.violation.value.should.equal('must_be_a_string_or_number');
      }
    });
  });

  it('should throw an error if the token is not numeric', () => {
    ['-10', '1.101', '1e6', new Array(50).join('foo')].forEach(value => {
      try {
        new Assert().TotpToken().validate(value);

        _should2.default.fail();
      } catch (e) {
        e.should.be.instanceOf(_validator.Violation);
        e.violation.value.should.equal('must_be_numeric');
      }
    });
  });

  it('should throw an error if the token length is below the minimum boundary', () => {
    try {
      new Assert().TotpToken().validate('10');

      _should2.default.fail();
    } catch (e) {
      e.should.be.instanceOf(_validator.Violation);
      e.violation.min.should.equal(6);
    }
  });

  it('should throw an error if the token length is above the maximum boundary', () => {
    ['1001001001', '000000009', '0000000010'].forEach(value => {
      try {
        new Assert().TotpToken().validate(value);

        _should2.default.fail();
      } catch (e) {
        e.should.be.instanceOf(_validator.Violation);
        e.violation.max.should.equal(8);
      }
    });
  });

  it('should have default boundaries between 6 and 8 digits', () => {
    const assert = new Assert().TotpToken();

    assert.boundaries.min.should.equal(6);
    assert.boundaries.max.should.equal(8);
  });

  it('should accept tokens between 6 and 8 digits', () => {
    ['123456', '0601338', '5166240', '12345678'].forEach(value => {
      new Assert().TotpToken().validate(value);
    });
  });
});