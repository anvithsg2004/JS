const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];

const dcHeroes = ["Superman", "Batman", "Wonder Woman", "The Flash", "Aquaman"];

// marvelHeroes.push(dcHeroes) // This will push in the same array
// console.log(marvelHeroes)

// let arr1 = marvelHeroes.concat(dcHeroes) // This will return a new Array
// console.log(arr1)

//Spread Operator = Just like a dropped glass
// let arr1 = [...marvelHeroes, ...dcHeroes]
// console.log(arr1)

// const arr = [1, [2, [3, [4, [5]]]]];
// const flatArr = arr.flat(Infinity); // THis is depth and by default the depth is 1
// console.log(flatArr);

const student = {
    name: "Anvith",
    age: 20,
    rollNumber: "CS101",
    course: "Computer Science",
    subjects: ["Math", "Physics", "Programming", "DBMS"],
}

console.log(Array.isArray(student))

// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))

console.log(Array.from(Object.entries(student)))

// // This only works for Arrays, Strings, Sets, Maps
// console.log(Array.from(student))


let s1 = 69
let s2 = 96
let s3 = 9696

console.log(Array.of(s1, s2, s3))
