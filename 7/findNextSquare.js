function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise

    const sqrt = Math.sqrt(sq)

    if (sqrt % 1 === 0) {
        return (sqrt + 1) * (sqrt + 1)
    } else {
        return -1
    }

}

console.log(findNextSquare(121))