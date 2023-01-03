function shortcut (string) {
    const arrayLetters = ['a', 'e', 'i', 'o', 'u']
    let newString = string

    for (let i = 0; i < arrayLetters.length; i++) {
        if (string.includes(arrayLetters[i])) {
            newString = newString.replaceAll(arrayLetters[i], "")
        }
    }
    return newString
}
console.log(shortcut('how are you today?'))

function shortcut2(string){
    return string.replace(/[aeiou]/gi, '');
}
console.log(shortcut2('how are you today?'))