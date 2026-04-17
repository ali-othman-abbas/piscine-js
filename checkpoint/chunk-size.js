"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseChunks(arr, chunkSize) {
    for (let i = 0; i < arr.length; i = i + chunkSize) {
        reverse(arr, i, Math.min(i + chunkSize - 1, arr.length - 1));
    }
    return arr;
}
function reverse(arr, start = 0, end = arr.length - 1) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
console.log(reverseChunks([1, 2, 3, 4, 5, 6, 7], 3));
console.log(reverseChunks([10, 20, 30, 40, 50, 123, 124, 5], 2));
console.log(reverseChunks([1, 2, 3, 4, 5], 4));
//# sourceMappingURL=chunk-size.js.map