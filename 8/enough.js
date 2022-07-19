function enough(cap, on, wait) {
    if (cap >= on + wait) {
        return 0
    }

    else {
        const res = cap - (on + wait)
        return res * (-1)
    }
}

console.log(enough(100, 60, 50))