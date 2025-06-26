// Object Freezeing : Deep Freeze

function deepFreeze(obj) {
    Object.freeze(obj);
    for (let key in obj) {
        if (
            typeof obj[key] === "object" &&
            obj[key] !== null &&
            !Object.isFrozen(obj[key])
        ) {
            deepFreeze(obj[key]);
        }
    }
}

const student = {
    name: "Anvith",
    address: {
        city: "Bengaluru"
    }
};

deepFreeze(student);

student.address.city = "Mumbai"; // ❌ won't change now
student.name = "SRK";            // ❌ won't change

console.log(student);

console.log(Object.isFrozen(student));         // true
console.log(Object.isFrozen(student.address)); // true
