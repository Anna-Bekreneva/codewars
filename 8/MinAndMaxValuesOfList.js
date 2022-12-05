const min = function(list){
    list.sort((a, b) => (a - b))
    return list[0];
}

const max = function(list){
    list.sort((a, b) => (b - a))
    return list[0];
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]))