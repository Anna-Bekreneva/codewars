const countSheep = (num) => {
    let res = ''
    for (let i = 1; i <= num; i++) {
        res += `${i} sheep...`
    } 
    console.log(res);
    return res
}

const countSheepWithWhile = (num) => {
    let res = ''
    let i = 1
    while (i < num + 1) {
        res += `${i} sheep...`
        i++
    }
    return res
}

//countSheep(0) // ""
//countSheep(1) // 1 sheep...
//countSheep(2) // 1 sheep...2 sheep...
countSheep(3) // 1 sheep...2 sheep...3 sheep...