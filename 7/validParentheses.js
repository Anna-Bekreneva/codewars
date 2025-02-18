function validParentheses(parenStr) {
    const parenArr = parenStr.split("")

    let parenLeft = []
    let parenRight = []

    for (let i = 0; i < parenArr.length; i++) {
        const element = parenArr[i]

        element === "(" ? parenRight.push(element) : parenLeft.push(element)

        if (parenLeft.length > parenRight.length) return false
    }

    return parenLeft.length === parenRight.length
}

console.log(validParentheses("()()("))