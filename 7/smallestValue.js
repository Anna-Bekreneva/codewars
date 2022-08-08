function min(arr, toReturn) {
    if (toReturn === 'index') {
        const res =  Math.min(...arr)
        return arr.indexOf(res)
    } else {
        return Math.min(...arr)
    }
}

console.log(min([1, 2, 3, 4, 5], 'index'))