'use strict';

var _validator = require('validator.js');

var _enums = require('../../src/enums');

var _lodash = require('lodash');

var _activityAssert = require('../../src/asserts/activity-assert');

var _activityAssert2 = _interopRequireDefault(_activityAssert);

var _should = require('should');

var _should2 = _interopRequireDefault(_should);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Extend Assert with `Activity`.
 */

const Assert = _validator.Assert.extend({ Activity: _activityAssert2.default });

/**
 * Test `ActivityAssert`.
 */

/**
 * Module dependencies.
 */

describe('ActivityAssert', () => {
  it('should throw an error if the activity is not a string', () => {
    [[], {}, 123].forEach(activity => {
      try {
        new Assert().Activity().validate(activity);

        _should2.default.fail();
      } catch (e) {
        e.should.be.instanceOf(_validator.Violation);
        e.violation.value.should.equal('must_be_a_string');
      }
    });
  });

  it('should throw an error if the activity is invalid', () => {
    try {
      new Assert().Activity().validate('foobar');

      _should2.default.fail();
    } catch (e) {
      e.should.be.instanceOf(_validator.Violation);
      e.show().assert.should.equal('Activity');
      e.show().violation.choices.should.eql((0, _lodash.values)(_enums.activity));
    }
  });

  it('should accept a valid activity', () => {
    new Assert().Activity().validate(_enums.activity.BANNED);
  });
});