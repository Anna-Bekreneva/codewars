function uniqueWithFor(arr) {
    const set = new Set();

    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i])
    }

    return set
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( uniqueWithFor(values) ); // Hare,Krishna,:-O

function uniqueWithFrom(arr) {
    return Array.from(new Set(arr))
}

console.log( uniqueWithFor(values) ); // Hare,Krishna,:-O