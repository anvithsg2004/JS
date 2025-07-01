
// Arguments are sent in array and returns a Result of function and Invokes Immediately 

let user = {
    name: "Anvith S G",
    number: 8618785770
}

function greet(welcome, question) {
    console.log(`Hi, ${this.name}, ${welcome} and ${question}`)
}

greet.apply(user, ["How are you?", "What is your age?"])


/////////////////////////////////////////////////////////////////////////////////////////

function Person(name, age) {
    this.name = name
    this.age = age
}

function Student(name, age, grade) {
    Person.apply(this, [name, age])
    this.grade = grade
}

let student1 = new Student("Anvith S G", 18, 10)
console.log(student1)
