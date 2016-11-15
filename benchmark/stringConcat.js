/**
 * 字符串拼接方法，性能比较
 */

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var concat1 = function(str1, str2){
    return str1 + str2;
};
var concat2 = function(str1, str2){
    var arr = [];
    arr.push(str1);
    arr.push(str2);

    return arr.join();
};
var concat3 = function(str1, str2){
    return str1.concat(str2);
};

suite.add('concat#+', function(){
    concat1('string1', 'string2');
})
.add('concat#array-jion', function(){
    concat2('string1', 'string2');
})
.add('concat#string-concat', function(){
    concat3('string1', 'string2');
})
.on('cycle', function(e){
    console.log(String(e.target));
})
.on('complete', function(e){
    console.log('Fastest is '+ this.filter('fastest').map('name'));
})
.run({'async': true});

/**
 * concat#+ x 90,483,047 ops/sec ±2.06% (84 runs sampled)
 * concat#array-jion x 12,303,912 ops/sec ±0.90% (82 runs sampled)
 * concat#string-concat x 40,845,196 ops/sec ±0.83% (89 runs sampled)
 * Fastest is concat#+
 */
