Array.prototype.remove_ = function(integer_list, values_list){
    let newArray = []
    for(let i = 0; i < integer_list.length; i++) {
        if (values_list.includes(integer_list[i])) {
        } else {
            newArray.push(integer_list[i])
        }
    }
    return newArray
}

console.log(Array.prototype.remove_([1, 1, 2 ,3 ,1 ,2 ,3 ,4], [1, 3]))