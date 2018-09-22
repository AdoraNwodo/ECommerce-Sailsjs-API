'use strict';

var _assertionFailedError = require('../../src/errors/assertion-failed-error');

var _assertionFailedError2 = _interopRequireDefault(_assertionFailedError);

var _httpError = require('../../src/errors/http-error');

var _httpError2 = _interopRequireDefault(_httpError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Test `AssertionFailedError`.
 */

/**
 * Module dependencies.
 */

describe('AssertionFailedError', () => {
  it('should inherit from `HttpError`', () => {
    const error = new _assertionFailedError2.default();

    error.should.be.instanceOf(_httpError2.default);
  });

  it('should have default `code`', () => {
    const error = new _assertionFailedError2.default();

    error.code.should.equal(500);
  });

  it('should have default `message`', () => {
    const error = new _assertionFailedError2.default();

    error.message.should.equal('Internal Server Error');
  });

  it('should accept a `message`', () => {
    const error = new _assertionFailedError2.default({ message: 'foo' });

    error.message.should.equal('foo');
  });

  it('should accept `properties`', () => {
    const error = new _assertionFailedError2.default({ properties: { foo: 'bar' } });

    error.foo.should.equal('bar');
  });
});