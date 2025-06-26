class Person {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`Hi, ${name}`)
    }
}

let person1 = new Person("Anvith")
console.log(person1.__proto__ == Person.prototype)
console.log(Person.prototype.greet)
