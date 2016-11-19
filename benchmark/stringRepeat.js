/**
 * 重复字符串多次
 */

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;


function repeat1 (input, times){
    var res = '';
    for(var i = 0; i < times; i++){
        res += input;
    }

    return res;
}

function repeat2 (input, times){
    return new Array(times + 1).join(input);
}

suite.add('repeat#"+="', function(){
    repeat1('abc', 3);
})
.add('repeat#array-join', function(){
    repeat2('abc', 3);
})
.on('cycle', function(e){
    console.log(String(e.target));
})
.on('complete', function(e){
    console.log('Fastest is '+ this.filter('fastest').map('name'));
})
.run({'async': true});