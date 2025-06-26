function add(num1, num2) {
    return num1 + num2;
}

let result = add(3, 2)
console.log(result)


function sayMyName(name = "Anvith") {
    return `Hi, ${name}`
}

console.log(sayMyName())
console.log(sayMyName("Anu"))
