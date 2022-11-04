String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase()
}

const test = (string) => {
    return string === string.toUpperCase()
}