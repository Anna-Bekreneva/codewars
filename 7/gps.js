function gps(s, x) {
    if (x <= 1) {
        return 0
    } else {

    }
}

console.log(gps(10, 0))

//В машине Джона GPS каждые s секунд регистрирует расстояние, пройденное от исходной точки (расстояния измеряются в произвольных, но согласованных единицах). Например, ниже часть записи с s = 15:

// x — расстояние от исходной точки, массив 
// s — время (секунды)

// array = [0.0, 0.2, 0.4, 0.69, 0.92, 1.15, 1.38, 1.61, 1.92, 2.16, 2.4, 2.64, 2.88, 3.12, 3.36]
// const result = array.reduce((sum, current) => {
//     return sum + current;
// })
// console.log(result)

// function gps(s, x) {

//     let maxSpeed = 0;

//     for (let i = 0; i < x.length - 1; i++) {

//         let modul = x[i + 1] - x[i];

//         let speed = 3600 * modul / s;

//         speed > maxSpeed ? maxSpeed = speed : maxSpeed = maxSpeed;

//     }

//     return maxSpeed;

// }

// 0 41.4 82.8 124.2 165.2 207 248.4 289.8
// 1 158,8

function greet(name) {
    if (name === "Johnny") {
        return "Hello, my love!";
    } else {
        return "Hello, " + name + "!";
    }
}