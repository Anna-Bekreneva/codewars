function sumArray(array) {
    if (array == null || array.length == 0 || array.length == 1) {
        return 0 
    }
    else {
        const max = Math.max(...array)
        const min = Math.min(...array)

        const result = array.reduce((sum, current) => {
            return sum + current;
        })

        return result - (min + max)
    }
}