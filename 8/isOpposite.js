function isOpposite(s1, s2) {
    let result

    if (s1 === "" || s2 === "") {
        result = false
    } else {
        let array = []
        for (const letter of s1) {
            let letterUpper
            let letterLower
            if (letter === letter.toUpperCase()) {
                letterLower = letter.toLowerCase()
            } else {
                letterUpper = letter.toUpperCase()
            }

            if (letterLower !== undefined) {
                array.unshift(letterLower);
            }

            if (letterUpper !== undefined) {
                array.unshift(letterUpper);
            }
        }

        let array2 = []
        for (const letter2 of s2) {
            array2.unshift(letter2);
        }

        array.reverse()
        array2.reverse()

        myStr1 = array.toString()
        myStr2 = array2.toString()

        if (myStr1 === myStr2) {
            result = true
        } else {
            result = false
        }
    }

    return result
}
