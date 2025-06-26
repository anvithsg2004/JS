// Primitives
let a = null
let b = 69
let c = "Anvith"
let d = BigInt(6969)
let e = true
let f = Symbol("Hi S")
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof (a), typeof (b), typeof (c), typeof (d), typeof (e), typeof (f), typeof (g))

// Object
let person = {
    name: "Anvith",
    number: 8618785770
}

console.log(person) // print the entire thing
console.log(person["name"]) // always give in sting with closed ""
console.log(person["number"]) // gives the value of the given key
console.log(typeof (person.number)) // Gives the type
console.log(typeof (person.name)) // Gives the type
