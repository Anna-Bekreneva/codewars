// https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript

function findDeletedNumber(arr, mixArr) {
    for (let i = 0; i < arr.length; i++) {
        if (!mixArr.includes(arr[i])) {
            return arr[i]
        }
    }

    return 0
}

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]))