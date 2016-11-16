'use strict';

var isInteger = require('./isInteger.js')

/**
 * FUNCTION:isNonnegativeInteger(value)
 *     - validates if a value is a nonnegative integer (integer primitive or integer object).
 * @param  {*}  value - value to validate
 * @return {Boolean}  boolean indicating if a value is a nonnegative integer
 */
function isNonnegativeInteger (value) {
    return isInteger(value) && value  >= 0;
}


// EXPORTS //

module.exports = isNonnegativeInteger;