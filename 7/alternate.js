function alternate(n, firstValue, secondValue){
    let result = []
    if (n < 1) {
        return result
    } else if (n % 2 === 0) {
        for (let i = 0; i < n / 2; i++) {
            result.push(firstValue, secondValue)
        }
        return result
    } else {
        const currentN = n - 1
        for (let i = 0; i < currentN / 2; i++) {
            result.push(firstValue, secondValue)
        }
        result.push(firstValue)
        return result
    }
}

console.log(alternate(10, "blue", "red"))