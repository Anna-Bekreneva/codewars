function check(a, x) {
    let result = false
    a.forEach(item => {
        if (item == x) {
            result = true
        }
    })
    return result
}

console.log(check([66, 100], 66))