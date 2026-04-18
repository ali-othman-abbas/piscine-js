function every(arr, func) {
    var bool = true;
    for (var i = 0; i < arr.length; i++) {
        bool = bool && func(arr[i], i, arr);
    }
    return bool;
}
function some(arr, func) {
    var bool = false;
    for (var i = 0; i < arr.length; i++) {
        bool = bool || func(arr[i], i, arr);
    }
    return bool;
}
function none(arr, func) {
    return !some(arr, func);
}
