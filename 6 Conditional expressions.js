// let a = prompt("What is your age?") // Only browser function.
let a = "18"
a = Number.parseInt(a) // Converting String to Number

console.log(a)

if (a > 18) {
    console.log("GO VOTE")
} else if (a == 18) {
    console.log("WAIT")
} else {
    console.log("NO YOU CAN NOT")
}
