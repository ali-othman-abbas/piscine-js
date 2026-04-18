var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function fold(arr, func, accumulator) {
    for (var i = 0; i < arr.length; i++) {
        accumulator = func(accumulator, arr[i], i, arr);
    }
    return accumulator;
}
function foldRight(arr, func, accumulator) {
    return fold(__spreadArray([], arr, true).reverse(), func, accumulator);
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
    return reduce(__spreadArray([], arr, true).reverse(), func, accumulator);
}
