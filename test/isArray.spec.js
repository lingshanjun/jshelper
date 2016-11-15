'use strict';

var mocha = require('mocha');
var chai = require('chai');
var proxyquire = require('proxyquire');
var isArray = require('../src/isArray.js');


var expect = chai.expect;

describe('isArray', function(){

    it('should export a function', function(){
        expect(isArray).to.be.a('function');
    });

    it('should positively validate', function(){
        expect(isArray([])).to.be.true;
        expect(isArray([1,2,3])).to.be.true;
        expect(isArray(new Array(10))).to.be.true;
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
            '',
            '5',
            {},
            function(){}
        ];

        for(var i = 0; i < values.length; i++){
            expect(isArray(values[i])).to.be.false;
        }
    });

    it('should include a polyfill for Array.isArray', function(){
        var nativeFunc = Array.isArray;

        // set isArray to be a polyfill, not a Array native method
        Array.isArray = undefined;
        // = Array.isArray || isArray ==> = undefined || isArray
        var isArray = proxyquire('../src/isArray.js', {});

        var values = [
            5,
            null,
            undefined,
            0,
            NaN,
            true,
            false,
            '',
            '5',
            {},
            function(){}
        ];

        for(var i = 0; i < values.length; i++){
            expect(isArray(values[i])).to.be.false;
        }

        expect(isArray([])).to.be.true;
        expect(isArray([1,2,3])).to.be.true;
        expect(isArray(new Array(10))).to.be.true;

        Array.isArray = nativeFunc;
    });
});