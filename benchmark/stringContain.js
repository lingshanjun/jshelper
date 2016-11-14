var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// add tests
suite.add('RegExp#test', function(){
    /o/.test('Hello World');            // 方法1：正则表达式的test方法
})
.add('String#indexOf', function(){
    'Hello World'.indexOf('o') > -1;    // 方法2：字符串对象的indexOf索引方法
})
.add('String#match', function(){
    !!'Hello World'.match(/o/);         // 方法3：字符串对象的match匹配方法
})

// add listeners
.on('cycle', function(event){       // 在每一个test测试完后触发
    console.log(String(event.target));
})
.on('complete', function(event){    // 在所有tests都测试完后触发
    // this => suite;
    // filter/map为benchmark的内置方法，封装于lodash的对应方法。
    // 'fastest'表示找出最快的test，'name'表示获取某个test的名字。
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})

// run async 异步运行
.run({'async': true});