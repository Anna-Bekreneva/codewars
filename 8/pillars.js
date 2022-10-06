function pillars(numPill, dist, width) {
    let result
    numPill === 1 ? result = 0 : result = dist * 100 * (numPill - 1) + ((numPill - 2) * width)
    return result
}

console.log(pillars(2, 20, 25))