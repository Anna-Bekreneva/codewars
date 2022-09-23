function feast(beast, dish) {
    const beastArray = beast.split("")
    const dishArray = dish.split("")

    if (String(beastArray.slice(-1)) === String(dishArray.slice(-1)) && beastArray[0] === dishArray[0]) {
       return true
    } return false
}

console.log(feast("brown bear", "bear claw"))