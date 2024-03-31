function century(year) {
    return year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1
}

function centuryWithCeil(year) {
    return Math.ceil(year / 100)
}


century(1705) // 18
century(1900) // 19
century(1601) // 17
century(2000) // 20
century(20201) // 200
century(89) // 1