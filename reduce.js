function fold(arr, func, accumulator) {
    for (var i = 0; i < arr.length; i++) {
        accumulator = func(accumulator, arr[i], i, arr);
    }
    return accumulator;
}
function foldRight(arr, func, accumulator) {
    return fold(arr.reverse(), func, accumulator);
}
function reduce(arr, func, accumulator) {
    if (arr.length === 0 && accumulator === undefined) {
        return new TypeError("reduce was called without an accumulator and the array is empty");
    }
    if (accumulator === undefined) {
        return fold(arr.slice(1), func, arr[0]);
    }
    else {
        return fold(arr, func, accumulator);
    }
}
function reduceRight(arr, func, accumulator) {
    return reduce(arr.reverse(), func, accumulator);
}
