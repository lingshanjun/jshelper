function extend(obj1, obj2){
    var obj = {};

    for (var key in obj1){
        obj[key] = obj2[key] === undefined ? obj1[key] : obj2[key];
    }

    return obj;
}

function isArray(arr){
    return toString.apply(arr) === '[object Array]';
}

function $$(selector, context){
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}
