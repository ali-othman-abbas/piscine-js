function forEach(arr, func) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var ele = arr_1[_i];
        func(ele);
    }
}
