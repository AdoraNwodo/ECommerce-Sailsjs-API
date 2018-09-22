'use strict';

var _httpError = require('../../src/errors/http-error');

var _httpError2 = _interopRequireDefault(_httpError);

var _responseParser = require('../../src/parsers/response-parser');

var _responseParser2 = _interopRequireDefault(_responseParser);

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Test `ResponseParser`.
 */

describe('ResponseParser', () => {
  describe('parse()', () => {
    it('should throw an error if the status code is not 500', () => {
      const body = {
        errors: {
          message: 'User has been suspended.'
        },
        message: 'User has been suspended.',
        success: false
      };

      try {
        (0, _responseParser2.default)([{ statusCode: 503 }, body]);

        _should2.default.fail();
      } catch (e) {
        e.body.should.eql(body);
        e.code.should.equal(503);
        e.message.should.equal('User has been suspended.');
        e.should.be.instanceOf(_httpError2.default);
      }
    });

    it('should throw an error if status code is 200 but `success` is `false`', () => {
      const body = {
        errors: {
          message: `User doesn't exist.`
        },
        message: `User doesn't exist.`,
        success: false
      };

      try {
        (0, _responseParser2.default)([{ statusCode: 200 }, body]);

        _should2.default.fail();
      } catch (e) {
        e.body.should.eql(body);
        e.code.should.equal(500);
        e.message.should.equal(`User doesn't exist.`);
        e.should.be.instanceOf(_httpError2.default);
      }
    });

    it('should throw an error if status code is 200 but `success` is not available', () => {
      const body = {
        errors: {
          message: `User doesn't exist.`
        },
        message: `User doesn't exist.`
      };

      try {
        (0, _responseParser2.default)([{ statusCode: 200 }, body]);

        _should2.default.fail();
      } catch (e) {
        e.body.should.eql(body);
        e.code.should.equal(500);
        e.message.should.equal(`User doesn't exist.`);
        e.should.be.instanceOf(_httpError2.default);
      }
    });

    it('should throw an error if status code is 200 but `message` is not available', () => {
      const body = '<html><body><h1>502 Bad Gateway</h1> The server returned an invalid or incomplete response.</body></html>';

      try {
        (0, _responseParser2.default)([{ statusCode: 200 }, body]);

        _should2.default.fail();
      } catch (e) {
        e.body.should.equal(body);
        e.code.should.equal(500);
        e.message.should.equal('Internal Server Error');
        e.should.be.instanceOf(_httpError2.default);
      }
    });

    it('should throw an error if status code is 200 but `body` is empty', () => {
      try {
        (0, _responseParser2.default)([{ statusCode: 200 }]);

        _should2.default.fail();
      } catch (e) {
        _should2.default.not.exist(e.body);
        e.message.should.equal('Internal Server Error');
        e.should.be.instanceOf(_httpError2.default);
      }
    });
  });
});
/**
 * Module dependencies.
 */