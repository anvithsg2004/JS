// Array
// for of == give the objects
let arr = [1, 2, 5, 8, 9, 7]
for (const element of arr) {
    console.log(element)
}

let str = "Anvith"
for (const s of str) {
    console.log(s)
}

const data = [
    {
        id: 1,
        name: "Anvith SG",
        bio: "Passionate full-stack developer and tech enthusiast who loves building scalable web applications.",
        avatar: null,
        email: "anvith@example.com",
        joinedAt: "2024-08-10T12:30:00Z"
    },
    {
        id: 2,
        name: "SRK",
        bio: "Backend developer with a strong grasp on databases and distributed systems.",
        avatar: "base64EncodedImageStringHere",
        email: "srk@example.com",
        joinedAt: "2023-12-05T09:00:00Z"
    }
];

for (const key of data) {
    console.log(key)
}

// for in == gives the index
const person = {
    name: "Alice",
    age: 25
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

const data1 = [
    {
        id: 1,
        name: "Anvith SG",
        bio: "Passionate full-stack developer and tech enthusiast who loves building scalable web applications.",
        avatar: null,
        email: "anvith@example.com",
        joinedAt: "2024-08-10T12:30:00Z"
    },
    {
        id: 2,
        name: "SRK",
        bio: "Backend developer with a strong grasp on databases and distributed systems.",
        avatar: "base64EncodedImageStringHere",
        email: "srk@example.com",
        joinedAt: "2023-12-05T09:00:00Z"
    }
];

for (let index in data1) {
    console.log(data1[index].name)
}
