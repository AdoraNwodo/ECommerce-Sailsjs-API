'use strict';

var _validator = require('validator.js');

var _errors = require('../src/errors');

var _validator2 = require('../src/validator');

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Test `Validator`.
 */

/**
 * Module dependencies.
 */

describe('Validator', () => {
  describe('assert()', () => {
    it('should throw a `AssertionFailedError` if assertion fails', () => {
      try {
        (0, _validator2.assert)({ name: 'Foo' }, { name: new _validator.Assert().Null() });

        _should2.default.fail();
      } catch (e) {
        e.should.be.instanceOf(_errors.AssertionFailedError);
        e.data.should.eql({ name: 'Foo' });
        e.errors.name.should.have.length(1);
        e.errors.name[0].show().assert.should.equal('Null');
      }
    });
  });
  describe('validate()', () => {
    it('should throw a `ValidationFailedError` if validation fails', () => {
      try {
        (0, _validator2.validate)({ name: 'Foo' }, { name: new _validator.Assert().Null() });

        _should2.default.fail();
      } catch (e) {
        e.should.be.instanceOf(_errors.ValidationFailedError);
        e.data.should.eql({ name: 'Foo' });
        e.errors.name.should.have.length(1);
        e.errors.name[0].show().assert.should.equal('Null');
      }
    });
  });
});