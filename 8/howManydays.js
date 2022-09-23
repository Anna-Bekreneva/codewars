function howManydays(month) {
    let days = 31;
    switch (month){
        case 2:
            days = 28
            break;
        case 4: case 6: case 9: case 11: days = 30
    }
    return days;
}

console.log(howManydays(12))