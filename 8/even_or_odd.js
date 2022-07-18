function even_or_odd(number) {
    let result 
    if (number % 2 === 0) {
        result = "Even" 
    } else {
        result = "Odd"
    }

    return result
}



console.log(even_or_odd(5))