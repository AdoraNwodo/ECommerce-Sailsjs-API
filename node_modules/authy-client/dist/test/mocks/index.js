'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.verifyPhone = exports.startPhoneVerification = exports.requestSms = exports.requestCall = exports.registerUser = exports.registerActivity = exports.getUserStatus = exports.getPhoneInformation = exports.getApprovalRequest = exports.getApplicationStatistics = exports.getApplicationDetails = exports.deleteUser = exports.createApprovalRequest = undefined;

var _createApprovalRequestMock = require('./create-approval-request-mock');

var _createApprovalRequest = _interopRequireWildcard(_createApprovalRequestMock);

var _deleteUserMock = require('./delete-user-mock');

var _deleteUser = _interopRequireWildcard(_deleteUserMock);

var _getApplicationDetailsMock = require('./get-application-details-mock');

var _getApplicationDetails = _interopRequireWildcard(_getApplicationDetailsMock);

var _getApplicationStatisticsMock = require('./get-application-statistics-mock');

var _getApplicationStatistics = _interopRequireWildcard(_getApplicationStatisticsMock);

var _getApprovalRequestMock = require('./get-approval-request-mock');

var _getApprovalRequest = _interopRequireWildcard(_getApprovalRequestMock);

var _getPhoneInformationMock = require('./get-phone-information-mock');

var _getPhoneInformation = _interopRequireWildcard(_getPhoneInformationMock);

var _getUserStatusMock = require('./get-user-status-mock');

var _getUserStatus = _interopRequireWildcard(_getUserStatusMock);

var _registerActivityMock = require('./register-activity-mock');

var _registerActivity = _interopRequireWildcard(_registerActivityMock);

var _registerUserMock = require('./register-user-mock');

var _registerUser = _interopRequireWildcard(_registerUserMock);

var _requestCallMock = require('./request-call-mock');

var _requestCall = _interopRequireWildcard(_requestCallMock);

var _requestSmsMock = require('./request-sms-mock');

var _requestSms = _interopRequireWildcard(_requestSmsMock);

var _startPhoneVerificationMock = require('./start-phone-verification-mock');

var _startPhoneVerification = _interopRequireWildcard(_startPhoneVerificationMock);

var _verifyPhoneMock = require('./verify-phone-mock');

var _verifyPhone = _interopRequireWildcard(_verifyPhoneMock);

var _verifyTokenMock = require('./verify-token-mock');

var _verifyToken = _interopRequireWildcard(_verifyTokenMock);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.createApprovalRequest = _createApprovalRequest;
/**
 * Export named mocks.
 */

exports.deleteUser = _deleteUser;
exports.getApplicationDetails = _getApplicationDetails;
exports.getApplicationStatistics = _getApplicationStatistics;
exports.getApprovalRequest = _getApprovalRequest;
exports.getPhoneInformation = _getPhoneInformation;
exports.getUserStatus = _getUserStatus;
exports.registerActivity = _registerActivity;
exports.registerUser = _registerUser;
exports.requestCall = _requestCall;
exports.requestSms = _requestSms;
exports.startPhoneVerification = _startPhoneVerification;
exports.verifyPhone = _verifyPhone;
exports.verifyToken = _verifyToken;