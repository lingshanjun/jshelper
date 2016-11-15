'use strict';

var mocha = require('mocha');
var chai = require('chai');
var isNumber = require('../src/isNumber.js');

var expect = chai.expect;

describe('isNumber', function(){
    it('should export a function', function(){
        expect(isNumber).to.be.a('function');
    });

    it('should positively validate', function(){
        expect(isNumber(5)).to.be.true;
        expect(isNumber(new Number('5'))).to.be.true;
        expect(isNumber(new Number(5))).to.be.true;
    });

    it('should negatively validate', function(){
        var values = [
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
            expect(isNumber(values[i])).to.be.false;
        }
    });
});