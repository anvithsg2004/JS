function addOne(num1, num2) {
    return num1 + num2;
}
console.log(addOne(69, 1))


let addTwo = function (num1, num2) {
    return num1 + num2
}
console.log(addTwo(68, 2))


let addThree = (num1, num2) => {
    return num1 + num2
}
console.log(addThree(67, 3))

let addFour = (num1, num2) => num1 + num2 // This is implicit return
console.log(addFour(66, 4))


