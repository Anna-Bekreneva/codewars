function isPythagoreanTriple(integers) {
    integers.sort((a, b) => (a - b))
    return integers[0] * integers[0] + integers[1] * integers[1] === integers[2] * integers[2]
}

console.log(isPythagoreanTriple([72, 78, 30]))
