class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }

    static info() {
        console.log("This is the Person class.");
    }
}

let person1 = new Person("Anvith S G")
person1.greet()

Person.info()
