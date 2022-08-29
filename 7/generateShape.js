function generateShape(integer){
    let share = ''
    for(let i = 0; i < integer * integer; i++) {
        if (i % integer === 0 && i !== 0) {
            share += '\n';
        }
        share += '+'
    }
    return share
}

console.log(generateShape(8))