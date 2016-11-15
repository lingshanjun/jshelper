'use strict';

var mocha = require('mocha');
var chai = require('chai');
var isString = require('../src/isString.js');

var expect = chai.expect;

describe('isString', function(){
    it('should export a function', function(){
        expect(isString).to.be.a('function');
    });

    it('should positively validate', function(){
        expect(isString('')).to.be.true;
        expect(isString('beefweg')).to.be.true;
        expect(isString(new String('knowtrans'))).to.be.true;
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
            function(){}
        ];

        for(var i = 0; i < values.length; i++){
            expect(isString(values[i])).to.be.false;
        }
    });
});