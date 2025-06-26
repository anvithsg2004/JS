function rest(...num1) {
    return typeof num1
}

function rest2(val1, val2, ...num1) {
    return num1
}

console.log(rest(100, 200, 300, 5155))
console.log(rest2(100, 200, 300, 5155))



let user = {
    name: "Anvith",
    age: 19
}

function handleObject(anyObject) {
    return `Hi, ${anyObject.name}  and age is ${anyObject.age}`
}

console.log(handleObject(user))
