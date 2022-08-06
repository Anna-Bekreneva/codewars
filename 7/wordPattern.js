function wordPattern(word) {
    const wordLow = word.toLowerCase().split('')
    const unique = [...new Set(wordLow)];
    console.log(unique, wordLow)
    const res = wordLow.map(item => unique.indexOf(item)).join('.');
    return res;
}

console.log(wordPattern('Hippopotomonstrosesquippedaliophobia'))

