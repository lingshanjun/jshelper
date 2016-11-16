'use strict';

/**
 * FUNCTION:isString(value)
 *     - validates if a value is a string (string primitive or string object).
 * @param  {*}  value - value to validate
 * @return {Boolean}  boolean indicating if a value is a string
 */
function isString (value) {
    return Object.prototype.toString.call(value) === '[object String]';
}


// EXPORTS //

module.exports = isString;