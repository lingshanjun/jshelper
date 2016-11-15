'use strict';

var mocha = require('mocha');
var chai = require('chai');
var isInteger = require('../src/isInteger.js');

var expect = chai.expect;

describe('isInteger', function(){
    it('should export a function', function(){
        expect(isInteger).to.be.a('function');
    });

    it('should positively validate', function(){
        expect(isInteger(5)).to.be.true;
        expect(isInteger(0)).to.be.true;
        expect(isInteger(-5)).to.be.true;
        expect(isInteger(new Number('5'))).to.be.true;
        expect(isInteger(new Number(5))).to.be.true;
    });

    it('should negatively validate', function(){
        var values = [
            5.5,
            1/0,
            Number.NEGATIVE_INFINITY,
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
            expect(isInteger(values[i])).to.be.false;
        }
    });
});