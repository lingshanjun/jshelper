'use strict';

var isNumber = require('./isNumber.js')

/**
 * FUNCTION:isInteger(value)
 *     - validates if a value is a integer (integer primitive or integer object).
 * @param  {*}  value - value to validate
 * @return {Boolean}  boolean indicating if a value is a integer
 */
function isInteger (value) {
    return isNumber(value) && value % 1 === 0;
}


// EXPORTS //

module.exports = isInteger;