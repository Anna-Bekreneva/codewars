function sumStr(a, b) {
    const aNumber = Number(a)
    const bNumber = Number(b)

    const res = aNumber + bNumber
    const resString = res.toString()
    return resString
}

console.log(sumStr("4", "5"))