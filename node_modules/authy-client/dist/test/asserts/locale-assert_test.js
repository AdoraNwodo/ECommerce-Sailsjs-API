'use strict';

var _validator = require('validator.js');

var _enums = require('../../src/enums');

var _lodash = require('lodash');

var _localeAssert = require('../../src/asserts/locale-assert');

var _localeAssert2 = _interopRequireDefault(_localeAssert);

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extend Assert with `Locale`.
 */

const Assert = _validator.Assert.extend({ Locale: _localeAssert2.default });

/**
 * Test `LocaleAssert`.
 */

/**
 * Module dependencies.
 */

describe('LocaleAssert', () => {
  it('should throw an error if the locale is not a string', () => {
    [[], {}, 123].forEach(locale => {
      try {
        new Assert().Locale().validate(locale);

        _should2.default.fail();
      } catch (e) {
        e.should.be.instanceOf(_validator.Violation);
        e.violation.value.should.equal('must_be_a_string');
      }
    });
  });

  it('should throw an error if the locale is invalid', () => {
    try {
      new Assert().Locale().validate('foobar');

      _should2.default.fail();
    } catch (e) {
      e.should.be.instanceOf(_validator.Violation);
      e.show().assert.should.equal('Locale');
      e.show().violation.choices.should.eql((0, _lodash.values)(_enums.locale));
    }
  });

  it('should accept a valid locale', () => {
    new Assert().Locale().validate(_enums.locale.ENGLISH);
  });
});