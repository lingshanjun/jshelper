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

suite.add('concat#+', function(){
    concat1('string1', 'string2');
})
.add('concat#array-jion', function(){
    concat2('string1', 'string2');
})
.on('cycle', function(e){
    console.log(String(e.target));
})
.on('complete', function(e){
    console.log('Fastest is '+ this.filter('fastest').map('name'));
})
.run({'async': true});

/**
 * concat#+ x 85,717,921 ops/sec ±2.47% (75 runs sampled)
concat#array-jion x 11,301,427 ops/sec ±1.18% (79 runs sampled)
Fastest is concat#+
 */
