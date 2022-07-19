// Sum Numbers
function sum(numbers) {
    if (numbers.length == 0) {
        return 0
    }

    else {
        const result = numbers.reduce((sum, current) => {
            return sum + current;
        })

        return result
    }
};