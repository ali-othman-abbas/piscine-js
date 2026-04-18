function filter(arr, func) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        func(arr[i], i, arr) && result.push(arr[i]);
    }
    return result;
}
function reject(arr, func) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        !func(arr[i], i, arr) && result.push(arr[i]);
    }
    return result;
}
function partition(arr, func) {
    var good = [];
    var bad = [];
    for (var i = 0; i < arr.length; i++) {
        func(arr[i], i, arr) ? good.push(arr[i]) : bad.push(arr[i]);
    }
    return [good, bad];
}
