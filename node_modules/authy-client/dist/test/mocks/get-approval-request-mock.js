'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.succeed = succeed;

var _nock = require('nock');

var _nock2 = _interopRequireDefault(_nock);

var _uuid = require('../utils/uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mock a GET request to retrieve the status of an approval request.
 */

/**
 * Module dependencies.
 */

function mock(_ref) {
  var _ref$request = _ref.request;
  let request = _ref$request === undefined ? {} : _ref$request;
  var _ref$response = _ref.response;
  let response = _ref$response === undefined ? {} : _ref$response;

  return (0, _nock2.default)(/\.authy\.com/).filteringPath(path => path.replace(/[\w]{8}(-[\w]{4}){3}-[\w]{12}/, '{id}')).get('/onetouch/json/approval_requests/{id}').query(request.query ? request.query : true).reply(response.code, response.body);
}

/**
 * Export a request that will `succeed`.
 */

function succeed() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  let request = _ref2.request;
  var _ref2$status = _ref2.status;
  let status = _ref2$status === undefined ? 'approved' : _ref2$status,
      ttl = _ref2.ttl;

  const now = new Date().toISOString();
  const createdAt = now;
  const updatedAt = now;
  let processedAt = now;

  if (ttl === -1) {
    processedAt = null;
  }

  return mock({
    request: request,
    response: {
      body: {
        approval_request: {
          _app_name: 'Test',
          _app_serial_id: 29225,
          _authy_id: '1635',
          _id: '56ad18731170706b7f00e352',
          _user_email: 'foo@bar.com',
          app_id: '56aaaed561709030f4003b30',
          created_at: createdAt,
          notified: false,
          processed_at: processedAt,
          status: status,
          updated_at: updatedAt,
          user_id: '52e71d989d29c9d3dc001951',
          uuid: (0, _uuid2.default)()
        },
        success: true
      },
      code: 200
    }
  });
}