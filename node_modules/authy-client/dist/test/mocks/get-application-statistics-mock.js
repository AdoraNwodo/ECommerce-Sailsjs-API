'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.succeed = succeed;

var _lodash = require('lodash');

var _nock = require('nock');

var _nock2 = _interopRequireDefault(_nock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * List of month names.
 */

/**
 * Module dependencies.
 */

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * Mock a GET request to retrieve application statistics.
 */

function mock(_ref) {
  var _ref$request = _ref.request;
  let request = _ref$request === undefined ? {} : _ref$request;
  var _ref$response = _ref.response;
  let response = _ref$response === undefined ? {} : _ref$response;

  return (0, _nock2.default)(/\.authy\.com/).get('/protected/json/app/stats').query(request.query ? request.query : true).reply(response.code, response.body);
}

/**
 * Export a request that will `succeed`.
 */

function succeed() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  let request = _ref2.request;

  return mock({
    request: request,
    response: {
      body: {
        app_id: 1,
        count: 12,
        message: 'Monthly statistics.',
        stats: (0, _lodash.times)(12, index => ({
          api_calls_count: (0, _lodash.random)(0, 100),
          auths_count: (0, _lodash.random)(0, 100),
          calls_count: (0, _lodash.random)(0, 100),
          month: months[index],
          sms_count: (0, _lodash.random)(0, 100),
          users_count: (0, _lodash.random)(0, 100),
          year: 2015
        })),
        success: true,
        total_users: 100
      },
      code: 200
    }
  });
}