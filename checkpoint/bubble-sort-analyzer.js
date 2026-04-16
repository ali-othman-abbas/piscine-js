var comparator = function (a, b) { return a - b; };
function bubbleSortAnalyzer(arr, comparator) {
    var _a;
    var itr = 0;
    var swap = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                swap++;
            }
            itr++;
        }
    }
    return {
        arr: arr,
        itr: itr,
        swap: swap
    };
}
var result = bubbleSortAnalyzer([4, 2, 7, 1, 3], comparator);
console.log(result);
