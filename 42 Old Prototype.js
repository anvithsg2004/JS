// OLD WAY = This is the old way to use OOP's
function Person(name, score) {
    this.name = name
    this.score = score
}

Person.prototype.greet = function () {
    console.log(`Hi, ${this.name} and ${this.score} is you score.`)
}

Person.prototype.increase = function () {
    this.score = this.score + 1
}

let person1 = new Person("Anvith", 0)
let person2 = new Person("SRK", 0)

person1.increase()
person1.greet()

person2.increase()
person2.greet()

// NEW WAY = This is the new way to use OOP's
// Same as the above
class PersonO {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    greet() {
        console.log(`Hi, ${this.name} and ${this.score} is your score.`);
    }

    increase() {
        this.score = this.score + 1;
    }
}

let person3 = new PersonO("Anvith", 0);
let person4 = new PersonO("SRK", 0);

person3.increase();
person3.greet();

person4.increase();
person4.greet();
