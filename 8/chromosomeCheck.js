function chromosomeCheck(sperm) {
    switch (sperm) {
        case "XX" : return "Congratulations! You're going to have a daughter."
        case "XY" : return "Congratulations! You're going to have a son."
    }
}

console.log(chromosomeCheck("XX"))