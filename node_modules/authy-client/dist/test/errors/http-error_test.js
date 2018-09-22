'use strict';

var _httpError = require('../../src/errors/http-error');

var _httpError2 = _interopRequireDefault(_httpError);

var _standardError = require('../../src/errors/standard-error');

var _standardError2 = _interopRequireDefault(_standardError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Test `HttpError`.
 */

/**
 * Module dependencies.
 */

describe('HttpError', () => {
  it('should inherit from `StandardError`', () => {
    const error = new _httpError2.default({ code: 400 });

    error.should.be.instanceOf(_standardError2.default);
  });

  it('should have a default message according to status code', () => {
    const error = new _httpError2.default({ code: 400 });

    error.message.should.equal('Bad Request');
  });

  it('should accept a `message`', () => {
    const error = new _httpError2.default({ code: 400, message: 'foo' });

    error.message.should.equal('foo');
  });

  it('should accept `properties`', () => {
    const error = new _httpError2.default({ code: 400, properties: { foo: 'bar' } });

    error.foo.should.equal('bar');
  });

  it('should use a message from `properties.body.message` if `message` is not available', () => {
    const error = new _httpError2.default({ code: 400, properties: { body: { message: 'bar' } } });

    error.message.should.equal('bar');
  });

  it('should use `message` if available', () => {
    const error = new _httpError2.default({ code: 400, message: 'foo', properties: { body: { message: 'bar' } } });

    error.message.should.equal('foo');
  });
});