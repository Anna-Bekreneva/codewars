function correctTail(bod, tail) {
    const last = bod.substring(bod.length - 1);
    if (last === tail) {
        return true
    } else {
        return false
    }
}