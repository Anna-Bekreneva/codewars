function remove (string) {
    if(string.slice(-1) === "!") {
        return string.slice(0, -1)
    } else {
        return string
    }
}

console.log(remove('Hi'))