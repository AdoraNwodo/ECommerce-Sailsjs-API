'use strict';

var _validator = require('validator.js');

var _countryOrCallingCodeAssert = require('../../src/asserts/country-or-calling-code-assert');

var _countryOrCallingCodeAssert2 = _interopRequireDefault(_countryOrCallingCodeAssert);

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extend Assert with `CountryOrCallingCode`.
 */

const Assert = _validator.Assert.extend({ CountryOrCallingCode: _countryOrCallingCodeAssert2.default });

/**
 * Test `CountryOrCallingCodeAssert`.
 */

/**
 * Module dependencies.
 */

describe('CountryOrCallingCodeAssert', () => {
  it('should throw an error if the country calling code is not a string or a number', () => {
    [[], {}].forEach(choice => {
      try {
        new Assert().CountryOrCallingCode().validate(choice);

        _should2.default.fail();
      } catch (e) {
        e.should.be.instanceOf(_validator.Violation);
        e.violation.value.should.equal('must_be_a_string_or_number');
      }
    });
  });

  it('should throw an error if the country calling code is invalid', () => {
    ['80', '999'].forEach(code => {
      try {
        new Assert().CountryOrCallingCode().validate(code);

        _should2.default.fail();
      } catch (e) {
        e.should.be.instanceOf(_validator.Violation);
        e.show().assert.should.equal('CountryOrCallingCode');
      }
    });
  });

  it('should throw an error if the country code is invalid', () => {
    ['XY'].forEach(code => {
      try {
        new Assert().CountryOrCallingCode().validate(code);

        _should2.default.fail();
      } catch (e) {
        e.should.be.instanceOf(_validator.Violation);
        e.show().assert.should.equal('CountryOrCallingCode');
      }
    });
  });

  it('should accept a valid country calling code', () => {
    ['1', '351'].forEach(code => {
      try {
        new Assert().CountryOrCallingCode().validate(code);
      } catch (e) {
        throw e;
      }
    });
  });

  it('should accept a valid country code', () => {
    ['PT', 'US'].forEach(code => {
      try {
        new Assert().CountryOrCallingCode().validate(code);
      } catch (e) {
        throw e;
      }
    });
  });
});