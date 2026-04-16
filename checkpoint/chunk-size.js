function reverseChunks(arr, chunkSize) {
    for (var i = 0; i < arr.length; i = i + chunkSize) {
        reverse(arr, i, Math.min(i + chunkSize - 1, arr.length - 1));
    }
    return arr;
}
function reverse(arr, start, end) {
    var _a;
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length - 1; }
    while (start < end) {
        _a = [arr[end], arr[start]], arr[start] = _a[0], arr[end] = _a[1];
        start++;
        end--;
    }
}
console.log(reverseChunks([1, 2, 3, 4, 5, 6, 7], 3));
console.log(reverseChunks([10, 20, 30, 40, 50, 123, 124, 5], 2));
console.log(reverseChunks([1, 2, 3, 4, 5], 4));
