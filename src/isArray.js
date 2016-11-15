'use strict';

/**
 * FUNCTION: isArray( value )
 *     [Validates if a value is an array.]
 *
 * @param  {*}  value [value to be validated]
 * @return {Boolean}       [boolean indicating whether value is an array]
 */
function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}


// EXPORTS //

module.exports = Array.isArray || isArray;