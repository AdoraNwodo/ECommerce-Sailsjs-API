'use strict';

var _enums = require('../src/enums');

var enums = _interopRequireWildcard(_enums);

var _errors = require('../src/errors');

var errors = _interopRequireWildcard(_errors);

var _src = require('../src/');

var index = _interopRequireWildcard(_src);

var _client = require('../src/client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Test `index`.
 */

/**
 * Module dependencies.
 */

describe('Index', () => {
  describe('exports', () => {
    it('should export `Client` constructor', () => {
      index.Client.should.equal(_client2.default);
    });

    it('should export `enums`', () => {
      index.enums.should.eql(enums);
    });

    it('should export `errors`', () => {
      index.errors.should.eql(errors);
    });
  });
});