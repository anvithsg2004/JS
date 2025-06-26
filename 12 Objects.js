// Object Literals
let user = {
    name: "Anvith",
    age: 20,
    email: "anvith@example.com",
    isLoggedIn: true
};

user.greet = function () {
    console.log("Hi, How are you?")
}

user.greet2 = function () {
    console.log(`Hi, are you ${this.name}`)
}

console.log(user)

console.log(user.greet)
console.log(user.greet())
console.log(user.greet2)
console.log(user.greet2())

