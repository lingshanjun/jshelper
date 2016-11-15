'use strict';

var mocha = require('mocha');
var chai = require('chai');
var isNumberPrimitive = require('../src/isNumberPrimitive.js');

var expect = chai.expect;

describe('isNumberPrimitive', function(){
    it('should export a function', function(){
        expect(isNumberPrimitive).to.be.a('function');
    });

    it('should positively validate', function(){
        expect(isNumberPrimitive( 5 )).to.be.true;
        expect(isNumberPrimitive( Math.PI )).to.be.true;
    });

    it('should negatively validate', function(){
        var values = [
            new Number(5),
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
            expect(isNumberPrimitive(values[i])).to.be.false;
        }
    });
});