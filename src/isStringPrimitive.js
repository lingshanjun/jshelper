'use strict';

/**
 * FUNCTION:isStringPrimitive (value)
 *     - validates if a value is a string primitive.
 * @param  {*}  value - value to validate
 * @return {Boolean}  boolean indicating if a value is a string primitive
 */
function isStringPrimitive (value) {
    return typeof value === 'string';
}


// EXPORTS //

module.exports = isStringPrimitive;