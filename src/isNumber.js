'use strict';

/**
 * FUNCTION:isNumber(value)
 *     validates if a value is a number (number primitive or number object, but NaN is not).
 * @param  {*}  value [value to validate]
 * @return {Boolean}  [boolean indicating if a value is a number]
 */
function isNumber (value) {
    return Object.prototype.toString.call(value) === '[object Number]' && value.valueOf() === value.valueOf();
}


// EXPORTS //

module.exports = isNumber;