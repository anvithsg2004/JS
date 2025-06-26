class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log("Hi")
    }
}

// Inheritance 
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age); // call parent constructor
        this.rollNumber = rollNumber;
    }

    showDetails() {
        console.log(`${this.name} - Roll No: ${this.rollNumber}`);
    }
}
