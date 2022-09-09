function arrayPlusArray(arr1, arr2) {
    let sumArr = 0;
    arr1.forEach(item => {
        sumArr+=item
    });
    arr2.forEach(item => {
        sumArr+=item
    });
    return sumArr;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))