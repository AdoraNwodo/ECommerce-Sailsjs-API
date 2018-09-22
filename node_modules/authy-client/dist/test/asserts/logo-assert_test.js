'use strict';

var _validator = require('validator.js');

var _enums = require('../../src/enums');

var _lodash = require('lodash');

var _logoAssert = require('../../src/asserts/logo-assert');

var _logoAssert2 = _interopRequireDefault(_logoAssert);

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extend Assert with `Logo`.
 */

const Assert = _validator.Assert.extend({ Logo: _logoAssert2.default });

/**
 * Test `LogoAssert`.
 */

/**
 * Module dependencies.
 */

describe('LogoAssert', () => {
  it('should throw an error if the logo is not a plain object', () => {
    [[], 'foo', 123].forEach(logo => {
      try {
        new Assert().Logo().validate(logo);

        _should2.default.fail();
      } catch (e) {
        e.should.be.instanceOf(_validator.Violation);
        e.violation.value.should.equal('must_be_a_plain_object');
      }
    });
  });

  it('should throw an error if the logo does not include a resolution', () => {
    try {
      new Assert().Logo().validate({ url: 'https://foo.bar' });

      _should2.default.fail();
    } catch (e) {
      e.should.be.instanceOf(_validator.Violation);
      e.show().assert.should.equal('EqualKeys');
      e.show().violation.difference.should.eql(['res']);
    }
  });

  it('should throw an error if the logo does not include an url', () => {
    try {
      new Assert().Logo().validate({ res: _enums.resolution.DEFAULT });

      _should2.default.fail();
    } catch (e) {
      e.should.be.instanceOf(_validator.Violation);
      e.show().assert.should.equal('EqualKeys');
      e.show().violation.difference.should.eql(['url']);
    }
  });

  it('should throw an error if the logo resolution is invalid', () => {
    try {
      new Assert().Logo().validate({ res: 'foobar', url: 'https://foo.bar' });

      _should2.default.fail();
    } catch (e) {
      e.should.be.instanceOf(_validator.Violation);
      e.show().assert.should.equal('Choice');
      e.show().violation.choices.should.eql((0, _lodash.values)(_enums.resolution));
    }
  });

  it('should throw an error if the logo url is invalid', () => {
    try {
      new Assert().Logo().validate({ res: _enums.resolution.DEFAULT, url: 'https:/foo.bar' });

      _should2.default.fail();
    } catch (e) {
      e.should.be.instanceOf(_validator.Violation);
      e.show().assert.should.equal('Uri');
    }
  });

  it('should accept a valid logo', () => {
    new Assert().Logo().validate({ res: _enums.resolution.DEFAULT, url: 'https://foo.bar' });
  });
});