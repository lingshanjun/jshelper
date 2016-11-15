'use strict';

/**
 * FUNCTION:isNumberPrimitive(value)
 *     validates if a value is a number primitive, excluding 'NaN').
 * @param  {*}  value [value to validate]
 * @return {Boolean}  [boolean indicating if a value is a number primitive]
 */
function isNumberPrimitive (value) {
    return  typeof value === 'number' && value.valueOf() === value.valueOf();
}


// EXPORTS //

module.exports = isNumberPrimitive;