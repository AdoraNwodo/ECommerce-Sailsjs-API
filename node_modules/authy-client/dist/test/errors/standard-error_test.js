'use strict';

var _standardError = require('../../src/errors/standard-error');

var _standardError2 = _interopRequireDefault(_standardError);

var _standardHttpError = require('standard-http-error');

var _standardHttpError2 = _interopRequireDefault(_standardHttpError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Test `StandardError`.
 */

/**
 * Module dependencies.
 */

describe('StandardError', () => {
  it('should inherit from `StandardHttpError`', () => {
    const error = new _standardError2.default(400);

    error.should.be.instanceOf(_standardHttpError2.default);
  });
});