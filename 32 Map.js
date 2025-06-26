const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

let newMap = numbers.map((element) => {
    return element + 10
})
console.log(newMap)

// Chaining
let chain = numbers.map((element) => {
    return element * 10
}).filter((element) => {
    if (element > 330) {
        return element
    }
})
console.log(chain)
