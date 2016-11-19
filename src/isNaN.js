'use strict';

/**
 * FUNCTION: isNaN( value )
 *     - Validates if a value is NaN.
 *
 * @param  {*}  value - value to be validated
 * @return {Boolean}  boolean indicating whether value is a NaN
 */
function isNaN(value) {
    return value !== value;
}


// EXPORTS //

module.exports = isNaN