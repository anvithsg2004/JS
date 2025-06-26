// 1) Create a variable of the type string and try to add number to it
let a = "Anvith"
a = a + 69
console.log(a)

let b = "11"
b = b + 69
console.log(b)

let c = 69
c = c + "11"
console.log(c)

let d = "11"
d = d + "69"
console.log(d)

var e = 69
e = e + "Anvith"
console.log(e)


// 2) Get the datatype of the last question 
console.log(typeof e + a)
console.log(typeof (e + a)) // If I put the e as let it will give error because () inside of this is a block

// 4) Add another key in the const object
const person = {
    name: "Anvith",
    number: 8618785770
}

person["friend"] = "SRK"

console.log(person)

person["name"] = "SRk"

console.log(person)

person["name"] = 69

console.log(person)

delete person["friend"];  // or delete person.friend
console.log(person);      // "friend" key is gone

console.log(person.name)
