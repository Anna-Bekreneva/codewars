const calcRating = (grade) => {
    const array = []

    for (let i = 0; i < grade; i++) {
        array.push('fill')
    }

    if (array.length < 5) {
        for (let i = array.length; i < 5; i++) {
            array.push('stroke')
        }
    }

    console.log(array)
}

calcRating(3)