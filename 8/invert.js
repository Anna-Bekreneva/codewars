function invert(array) {
    let newArray = []
    if (array === []) {
        return []
    } else if (array === [0]) {
        return [-0]
    }

    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * (-1))
    }

    return newArray

}

console.log(invert([1,-2,3,-4,5]))