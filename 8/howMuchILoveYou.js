function howMuchILoveYou(nbPetals) {
    const array = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]

    const number = (nbPetals - 1) % array.length
    return array[number]
}

console.log(howMuchILoveYou(235))