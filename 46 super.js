class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }
}

let student1 = new Student("SRK", 21, "B")
console.log(student1)
