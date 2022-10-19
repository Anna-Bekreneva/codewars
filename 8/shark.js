function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){

    let newSharkSpeed = sharkSpeed;
    if (dolphin) {
        newSharkSpeed = sharkSpeed / 2
    }

    return sharkDistance / pontoonDistance / youSpeed ?  "Alive!" : "Shark Bait!"
}

console.log(shark(38, 31, 4, 9, false)) //Shark Bait!
console.log(shark(47, 102, 0, 13, false)) //Shark Bait!
console.log(shark(12, 50, 4, 8, true)) //Alive
console.log(shark(37, 80, 2, 14, true)) //Shark Bait!