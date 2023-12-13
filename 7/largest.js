const largest = (n, array) => {
    if (n < 1) return []
    return array.sort((a, b) => b - a).slice(0, n).reverse();
}

console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]))