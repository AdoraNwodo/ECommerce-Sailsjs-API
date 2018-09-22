'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.succeed = succeed;
exports.succeedWithForce = succeedWithForce;
exports.succeedWithSmsIgnored = succeedWithSmsIgnored;

var _nock = require('nock');

var _nock2 = _interopRequireDefault(_nock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mock a GET request to send verification token via sms.
 */

function mock(_ref) {
  var _ref$request = _ref.request;
  let request = _ref$request === undefined ? {} : _ref$request;
  var _ref$response = _ref.response;
  let response = _ref$response === undefined ? {} : _ref$response;

  return (0, _nock2.default)(/\.authy\.com/).filteringPath(path => path.replace(/\/[0-9]+/, '/{authyId}')).get('/protected/json/sms/{authyId}').query(request.query ? request.query : true).reply(response.code, response.body);
}

/**
 * Export a request that will `succeed`.
 */

/**
 * Module dependencies.
 */

function succeed() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  let request = _ref2.request;

  return mock({
    request: request,
    response: {
      body: {
        cellphone: '+351-XXX-XXX-XX67',
        message: 'SMS token was sent',
        success: true
      },
      code: 200
    }
  });
}

/**
 * Export a request that will `succeed` with `force=true`.
 */

function succeedWithForce() {
  return succeed({ request: { query: { force: true } } });
}

/**
 * Export a request that will `succeed` with SMS ignored.
 */

function succeedWithSmsIgnored() {
  return mock({
    response: {
      body: {
        cellphone: '+351-XXX-XXX-XX67',
        device: 'iphone',
        ignored: true,
        message: 'Ignored: SMS is not needed for smartphones. Pass force=true if you want to actually send it anyway.',
        success: true
      },
      code: 200
    }
  });
}