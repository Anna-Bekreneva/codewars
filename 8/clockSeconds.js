function past(h, m, s){
    let hours = 0
    let minutes = 0
    let seconds = 0

    if (h > 0) {
        hours = h * 60 * 60 * 1000
    }

    if (m > 0) {
        minutes = m * 60 * 1000
    }

    if (s > 0) {
        seconds = s * 1000
    }

    return hours + minutes + seconds
}

console.log(past(0, 1, 1))