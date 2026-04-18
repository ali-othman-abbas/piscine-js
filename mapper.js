function map(arr, func) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i, arr));
    }
    return result;
}
