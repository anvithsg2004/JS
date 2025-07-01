
// Arguments are sent Individualy and returns a	Result of function and Invokes Immediately 

let user = {
    name: "Anvith S G",
    number: 8618785770
}

function greet(welcome) {
    console.log(`Hi ${this.name}, ${welcome}`)
}

greet.call(user, "How are you?")


///////////////////////////////////////////////////////////////////////////////////////////

function Person(name, age) {
    this.name = name
    this.age = age
}

function Student(name, age, grade) {
    Person.call(this, name, age)
    this.grade = grade
}

let student1 = new Student("Anvith S G", 18, 10)
console.log(student1)
