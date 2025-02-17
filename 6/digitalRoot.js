// https://www.codewars.com/kata/541c8630095125aba6000c00

const digitalRoot = (n) => {
    if (typeof n !== 'number') {
        return null
    }

    if (n < 10) {
        return n
    } else {
        const figures = String(n).split('')
        const resNumber = figures.map((item) => Number(item)).reduce((prev, current) => prev + current)
        return resNumber < 10 ? resNumber : digitalRoot(resNumber)
    }
}

console.log(digitalRoot(456))