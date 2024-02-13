function order(words){
    const array = words.split(" ")

    let memory = {}
    let arraySort = []

    for(let i = 0; i < array.length; i++) {
        const item = array[i].split("")
        let res = ''
        res = item.sort().join("")
        arraySort.push(res)

        memory = { ...memory, [res]: array[i] }
    }

    arraySort = arraySort.sort()

    let arrayResult = []

    for (let i = 0; i < arraySort.length; i++) {
        arrayResult.push(memory[arraySort[i]])
    }

    return arrayResult.join(" ")
}

order("is2 Thi1s T4est 3a") // Thi1s is2 3a T4est