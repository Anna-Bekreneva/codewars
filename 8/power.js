function numberToPower(number, power) {
    if (power === 0) {
        return 1
    } if (power === 1) {
        return number
    } else {
        return number * numberToPower(number, power - 1)
    }
}

console.log(numberToPower(10, 6))