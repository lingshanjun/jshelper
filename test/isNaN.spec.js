'use strict';

var mocha = require('mocha');
var chai = require('chai');
var isNaN = require('../src/isNaN.js');

var expect = chai.expect;

describe('isNaN', function(){
    it('should export a function', function(){
        expect(isNaN).to.be.a('function');
    });

    it('should positively validate', function(){
        expect(isNaN(NaN)).to.be.true;
        expect(isNaN(Number.NaN)).to.be.true;
        expect(isNaN(NaN + 3)).to.be.true;
        expect(isNaN(Number(new Number('5fw')))).to.be.true;
        expect(isNaN(Math.acos(2))).to.be.true;
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
            [],
            {},
            function(){}
        ];

        for(var i = 0; i < values.length; i++){
            expect(isNaN(values[i])).to.be.false;
        }
    });
});