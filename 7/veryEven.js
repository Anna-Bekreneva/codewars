// https://www.codewars.com/kata/58c9322bedb4235468000019/train/javascript

const isVeryEvenNumber = (n) => {
    const arr = [ ...n.toString() ]
    
    if (arr.length > 1) {
        const sum = arr.reduce((prev, current) => Number(prev) + Number(current))
        return isVeryEvenNumber(sum)
    } else {
        return arr[0] % 2 === 0
    }
}

console.log(isVeryEvenNumber(88))