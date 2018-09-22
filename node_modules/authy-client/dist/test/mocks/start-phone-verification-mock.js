'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.succeed = succeed;

var _nock = require('nock');

var _nock2 = _interopRequireDefault(_nock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mock a POST request to start a phone verification.
 */

function mock(_ref) {
  var _ref$request = _ref.request;
  let request = _ref$request === undefined ? {} : _ref$request;
  var _ref$response = _ref.response;
  let response = _ref$response === undefined ? {} : _ref$response;

  return (0, _nock2.default)(/\.authy\.com/).post('/protected/json/phones/verification/start', request.body).query(request.query ? request.query : true).reply(response.code, response.body);
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

  let message = `Text message sent +1 111-111-1111`;

  if (request && request.body.via === 'call') {
    message = `Call to +1 111-111-1111 initiated`;
  }

  return mock({
    request: request,
    response: {
      body: {
        carrier: 'AT&T Mobility (New Cingular Wireless PCS, LLC)',
        is_cellphone: true,
        is_ported: false,
        message: message,
        success: true
      },
      code: 200
    }
  });
}