// this refers to the object that is calling the function.

let user = {
    name: "Anvith",
    age: 19,

    // This is a regular function. When you call user.greet(), this points to the user object.
    greet: function () {
        console.log(`Your name is ${this.name} and age is ${this.age}`)
        console.log(this)
    },
    greet1: () => {
        console.log(`Your name is ${this.name} and age is ${this.age}`);
        console.log(this);
    }
}

// user.greet()
// user.greet1()
// user.name = "SRK"
// user.greet()

// function greet() {
//     let name = "Anvith"
//     console.log(this.name)
// }
// greet()

// let grret1 = () => {
//     let name = "Anvith"
//     console.log(this.name)
// }
// grret1()

function outer() {
    this.name = "Outer Scope";

    const greet = () => {
        console.log(this.name); // this is from outer
    };

    greet(); // 👉 "Outer Scope"
}

outer();
