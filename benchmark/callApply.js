var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var slice1 = function(str){
    return [].slice.call(str);
};

var slice2 = function(str){
    return [].slice.apply(str);
};


suite.add('call', function(){
    slice1('teststringsomemore');
})
.add('apply', function(){
    slice2('teststringsomemore');
})
.on('cycle', function(e){
    console.log(String(e.target));
})
.on('complete', function(e){
    console.log('Fastest is '+ this.filter('fastest').map('name'));
})
.run({'async': true});

/**result
call x 189,509 ops/sec ±1.07% (78 runs sampled)
apply x 187,665 ops/sec ±1.13% (83 runs sampled)
Fastest is call,apply
 */