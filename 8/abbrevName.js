function abbrevName(name){
    const array = name.split(" ")
    return `${array[0][0]}.${array[1][0]}`
}

abbrevName("Sam Harris")
abbrevName("Patrick Feenan")
abbrevName("p Favuzzi")

function abbrevNameWithMap(name){
    return name.split(" ").map((element) => element[0].toUpperCase()).join(".")
}

abbrevNameWithMap("Sam Harris")
abbrevNameWithMap("Patrick Feenan")
abbrevNameWithMap("p Favuzzi")