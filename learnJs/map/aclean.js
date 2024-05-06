const aclean = (arr) => {
    const map = new Map()

    for (let word of arr) {
        const sorted = word.split('').sort().join('').toLowerCase()
        map.set(sorted, word)
    }

    const res = Array.from(new Set(map.values()))
    console.log(res)
}

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"