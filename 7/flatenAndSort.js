function flattenAndSort(array) {
    let result = []
    array.forEach(element => {
        if (element.length != 0 && element === element) {

            if (typeof(element) === "object") {
                element.forEach(element2 => {
                    result.push(element2)
                })
            } else {
                result.push(element)
            }
        }
    })

    return result.sort((a, b) => a - b)
}

console.log(flattenAndSort( [[],[],[],[],[],[]]))
