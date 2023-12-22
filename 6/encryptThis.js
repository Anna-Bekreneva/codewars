const encryptThis = function(text) {
    if (!text.length) return
    const array = text.split(' ')
    let newArray= []
    array.forEach((word) => {
        if (word.split('').length === 1) {
            newArray.push(word.charCodeAt(0) + '')
        } else if (word.split('').length === 2) {
            newArray.push(word.charCodeAt(0) + word.slice(1))
        } else {
            const firstSymbol = (word[0].charCodeAt(0))
            const second = word[1]
            const last = word[word.length - 1]
            // 2 меняется с последней

            const res = firstSymbol + last + word.slice(2, word.length - 1) + second
            newArray.push(res)
            return res
        }
    })
    console.log(newArray)
    console.log(newArray.join(' '))
    return newArray.join(' ')
}

//encryptThis('A')
//encryptThis('hello world') // 104olle 119drlo
encryptThis('in')
//encryptThis('A wise old owl lived in an oak') // 65 119esi 111dl 111lw 108dvei 105n 97n 111ka