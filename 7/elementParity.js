const solve = (arr) => {
    if (!arr.length) return console.log('Error')
    const positiveArr = arr.filter(number => number > 0)
    const negativeArr = arr.filter(number => number < 0)

    const compare = (workArray, findArray) => {
        let alone
        workArray.forEach(number => {
            const pair = findArray.find(element => element === number * (-1))
            if (!pair) return alone = number
        });
        return alone
    }

    return positiveArr.length > negativeArr.length ? compare(positiveArr, negativeArr) : compare(negativeArr, positiveArr)
};

console.log(solve([1, -1, 2, -2, 3]))