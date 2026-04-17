"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparator = (a, b) => a - b;
function bubbleSortAnalyzer(arr, comparator) {
    let itr = 0;
    let swap = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap++;
            }
            itr++;
        }
    }
    return {
        arr,
        itr,
        swap
    };
}
const result = bubbleSortAnalyzer([4, 2, 7, 1, 3], comparator);
console.log(result);
//# sourceMappingURL=bubble-sort-analyzer.js.map