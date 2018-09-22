'use strict';

var _httpError = require('../../src/errors/http-error');

var _httpError2 = _interopRequireDefault(_httpError);

var _validationFailedError = require('../../src/errors/validation-failed-error');

var _validationFailedError2 = _interopRequireDefault(_validationFailedError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Test `ValidationFailedError`.
 */

/**
 * Module dependencies.
 */

describe('ValidationFailedError', () => {
  it('should inherit from `HttpError`', () => {
    const error = new _validationFailedError2.default();

    error.should.be.instanceOf(_httpError2.default);
  });

  it('should have default `code`', () => {
    const error = new _validationFailedError2.default();

    error.code.should.equal(400);
  });

  it('should have default `message`', () => {
    const error = new _validationFailedError2.default();

    error.message.should.equal('Validation Failed');
  });

  it('should accept `errors`', () => {
    const error = new _validationFailedError2.default({ properties: { errors: { foo: 'bar' } } });

    error.errors.foo.should.equal('bar');
  });
});