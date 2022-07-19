function capitalizeWord(word) {
    const first = word[0].toUpperCase();
    const newWord = word.slice(1)
    const res = first + newWord
    return res
}

console.log(capitalizeWord("word"))