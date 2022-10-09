function expressionMatter(a, b, c) {
    let one = a * (b + c)
    const two = a * b * c
    const three = a + b * c
    const four = (a + b) * c
    const five = a + b + c

    const array = [one, two, three, four, five]
    return Math.max(...array)
}

console.log(expressionMatter(1, 1, 1))