'use strict';

var mocha = require('mocha');
var chai = require('chai');
var isStringPrimitive = require('../src/isStringPrimitive.js');

var expect = chai.expect;

describe('isStringPrimitive', function(){
    it('should export a function', function(){
        expect(isStringPrimitive).to.be.a('function');
    });

    it('should positively validate', function(){
        expect(isStringPrimitive('')).to.be.true;
        expect(isStringPrimitive('beefweg')).to.be.true;
    });

    it('should negatively validate', function(){
        var values = [
            5,
            null,
            undefined,
            0,
            NaN,
            true,
            false,
            [],
            {},
            function(){},
            new String('knowtrans')
        ];

        for(var i = 0; i < values.length; i++){
            expect(isStringPrimitive(values[i])).to.be.false;
        }
    });
});