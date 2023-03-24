function howMuchWater(water, load, clothes){

    const power = (x, y) => {
        if (x === 0 || y === 1 || y === 0) {
            return x
        } else {
            return x * power(x, y - 1)
        }
    }

    let answer;

    if (clothes < load) {
        return answer = 'Not enough clothes'
    }

    if (clothes > load * 2) {
        return answer = 'Too much clothes'
    }

    if (clothes > load) {
        const needWater = water * power(1.1, clothes - load)
        return answer = Number(needWater.toFixed(2))
    }

    if (clothes === load) {
        const needWater = water * power(1, clothes - load)
        return answer = Number(needWater.toFixed(2))
    }
}

console.log(howMuchWater(10,11,20))