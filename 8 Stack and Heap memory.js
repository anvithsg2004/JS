// let yourName = "Anvith" // (Stack Memory)
// console.log(yourName)

// let friendName = yourName // Copy is given to here not the orignal value
// console.log(friendName)

// friendName = "Govind"
// console.log(friendName)


let me = { // Heap Memory
    name: "Anvith",
    phoneNumber: 8618785770
}
console.log(me)

let he = me
console.log(he)

he.name = "SRK"
console.log("Copied =", he)
console.log("Original =", me)
