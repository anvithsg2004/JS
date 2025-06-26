// Object Destructuring
const student = {
    name: "Anvith",
    age: 20,
    course: "Computer Science"
};

// Old way
let name1 = student.name;
let age1 = student.age;

// New Way
// The variable names on the left must match the keys in the object exactly — otherwise, they’ll be undefined.
const { name, age, course } = student

console.log(name)
console.log(age)
console.log(course)

//Rename while destructuring:
const { name: studentName, age: studentAge } = student;
console.log(studentName);
