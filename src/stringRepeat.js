'use strict';

// isString
function isString (value) {
    return Object.prototype.toString.call(value) === '[object String]';
}

function stringRepeat (str, n) {

    if( !isString(str) ){
        throw new TypeError('invalid input argument. First argument must be a string. Value: ' + str + '.');
    }
}

stringRepeat(2,2);

// EXPORTS //

module.exports = stringRepeat;