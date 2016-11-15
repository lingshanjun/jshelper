'use strict';

var mocha = require('mocha');
var chai = require('chai');
var isNonnegativeInteger = require('../src/isNonnegativeInteger.js');

var expect = chai.expect;

describe('isNonnegativeInteger', function(){
    it('should export a function', function(){
        expect(isNonnegativeInteger).to.be.a('function');
    });

    it('should positively validate', function(){
        expect(isNonnegativeInteger(5)).to.be.true;
        expect(isNonnegativeInteger(0)).to.be.true;
        expect(isNonnegativeInteger(new Number('5'))).to.be.true;
        expect(isNonnegativeInteger(new Number(5))).to.be.true;
    });

    it('should negatively validate', function(){
        var values = [
            5.5,
            -5.5,
            1/0,
            Number.NEGATIVE_INFINITY,
            Number.POSITIVE_INFINITY,
            Math.PI,
            null,
            undefined,
            true,
            false,
            '5',
            NaN,
            new Number(NaN),
            new Number('fwg'),
            new Number('5gge'), // [Number: NaN]
            [],
            {},
            function(){}
        ];

        for(var i = 0; i < values.length; i++){
            expect(isNonnegativeInteger(values[i])).to.be.false;
        }
    });
});