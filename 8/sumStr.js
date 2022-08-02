// function positiveSum(arr) {
//     let res = 0
//     if (arr.length == 0 || arr[0] === 0) {
//         res = 0
//     } 
    
//     else {
//         const arrayPositive = []
//         arr.forEach(element => {
//             if (element > 0) {
//                 let positive = element
//                 arrayPositive.unshift(positive)

//                 const sumPositives = arrayPositive.reduce((sum, current) => {
//                     return sum + current;
//                 })

//                 return sumPositives
//             } 
//         });
        
//     }

//     return 
// }

// console.log(positiveSum([-1, -2, -3, -4, -5]))

function sumStr(a, b) {
    const aNumber = Number(a)
    const bNumber = Number(b)

    const res = aNumber + bNumber
    const resString = res.toString()
    return resString
}

console.log(sumStr("4", "5"))