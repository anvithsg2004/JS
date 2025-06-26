// Object Freezeing

// This is a shallow freeze

const user = {
    name: "Anvith",
    age: 20
};

Object.freeze(user);

user.name = "SRK";         // ❌ Won't change
user.email = "test@mail";  // ❌ Won't be added
delete user.age;           // ❌ Won't be deleted

console.log(user);
