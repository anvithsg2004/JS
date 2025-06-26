const student = {
    name: "Anvith",
    age: 20,
    course: "Computer Science"
};

function greet({ name, age, course }) {
    console.log(`Hi ${name}, Are you from ${course} and age of ${age}?`)
}

greet(student)
