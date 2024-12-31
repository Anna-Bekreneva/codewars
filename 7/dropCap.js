const dropCap = (n) => {
    if (!n.trim() || n.length < 3) return n

    const array = n.split(" ");
    let newArray = []

    const toUpperCaseFirstLetter = (word) => {
        const arrayLetters = word.split("")
        arrayLetters.splice(0, 1, word[0].toUpperCase())
        return arrayLetters.join("")
    }

    array.forEach(word => {
        if (word.length > 2) {
            word = toUpperCaseFirstLetter(word.toLowerCase())
        }
        newArray.push(word)
    });
    return newArray.join(" ")
}

console.log(dropCap("nekm RY GDpYIlRwmNAOTXFaeswpSAl mT"))
console.log(dropCap("ALL CAPS CRAZINESS"))