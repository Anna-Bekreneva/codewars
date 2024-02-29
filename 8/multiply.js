const multiplyFor = (number) => {
    let length
    if (number > 0) {
        length = number.toString().length
    } else {
        length = number.toString().length - 1
    }

    let result = 0

    for (let i = 0; i < length; i++) {
        if (i === 0) {
            result = number * 5
        } else {
            result = result * 5
        }
    }

    console.log(result)
    return result
}

function multiplyWhile(number) {
    let length
    if (number > 0) {
        length = number.toString().length
    } else {
        length = number.toString().length - 1
    }

    let result = 0

    let i = 0
    while (i < length) {
        if (i === 0) {
            result = number * 5
        } else {
            result = result * 5
        }
        i ++
    }

    console.log(result)
    return result
}

const multiplyMap = (number) => {
    let array = []
    if (number > 0) {
        array = number.toString().split('')
    } else {
        array = number.toString().split('')
        array.shift()
    }

    let result = number
    const mappedArray = array.map((item) => {
        result = result * 5
    })

    console.log(result)
    return result
}

const multiplyForeach = (number) => {
    let array = []
    if (number > 0) {
        array = number.toString().split('')
    } else {
        array = number.toString().split('')
        array.shift()
    }

    let result = number
    array.forEach((item) => {
        result = result * 5
    })

    console.log(result)
    return result
}

const multiplySimple = (number) => {
    const array = number.toString().split('')

    if (number < 0) array.shift()

    let result = number

    array.forEach(() => result = result * 5)

    console.log(result)
    return result
}

const multiplyPow = (number) => {
    const array = number.toString().split('')
    if (number < 0) array.shift()
    const res = Math.pow(5, array.length)
    return res * number
}

multiplyPow(200) // 25000