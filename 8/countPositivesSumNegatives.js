function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0) {
        const emptyArray = []
        return emptyArray
    } else {
        const arrayNegative = []
        const arrayPositive = []

        input.forEach(element => {
            if (element < 0) {
                let negative = element
                arrayNegative.unshift(negative)
            }
            if (element > 0) {
                let positive = element
                arrayPositive.unshift(positive)
            }
        });

        const sumNegatives = arrayNegative.reduce((sum, current) => {
            return sum + current;
        })

        const countPositives = arrayPositive.length

        const arrayResult = [countPositives, sumNegatives]
        return arrayResult
    }
}

