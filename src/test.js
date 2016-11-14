// function repeat(input, times){
//     var res = '';
//     for(var i = 0; i < times; i++){
//         res += input;
//     }

//     return res;
// }

// var t1 = new Date();

// for(var i = 0; i < 10000000; i++){
//     repeat('abc', 10);
// }

// var t2 = new Date();

// console.log(t2 - t1);

function repeat1(input, times){
    return impl.call(input, times);
}

function impl(input, times){
    var res = '';
    var str = '' + input;
    var n = times > 0 ? times: -times;

    
}