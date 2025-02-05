// https://www.codewars.com/kata/5966847f4025872c7d00015b/javascript

function averageString(str) {
    const na = 'n/a'

    if (!str.length) {
        return na
    }

    const arr = str.split(' ')
    const numbers = []

    const numberWords = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }

    arr.forEach(item => numbers.push(numberWords[item]));

    if (numbers.includes(undefined)) {
        return na
    }

    const totalSum = numbers.reduce((prev, current) => prev + current)
    const avverage = Math.floor(totalSum / numbers.length)

    for (let i in numberWords) {
        if (numberWords[i] === avverage) {
            return i
        }
    }
}

function averageString2(str) {
    const na = 'n/a'

    if (!str.length) {
        return na
    }

    const arr = str.split(' ')
    let res = 0;
    const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    arr.forEach(item => {
        if (numberWords.indexOf(item)) {
            res += numberWords.indexOf(item)
        } else {
            return na
        }
    });

    return numberWords[Math.floor(res / arr.length)]
}

console.log(averageString2("zero nine five two")) // four
console.log(averageString2("four six two three")) // three
console.log(averageString2("one two three four five")) // three
console.log(averageString2("five four")) // four
console.log(averageString2("zero zero zero zero zero")) // zero
console.log(averageString2("")) // zero