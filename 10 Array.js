let arr = [1, 2, 2, 5, 8] // Primitive

let newArr = new Array(5) // Object
newArr.fill(1)

console.log(newArr.length)
console.log(newArr.at(1))
console.log(newArr)

newArr.push(8)

console.log(newArr)

newArr.unshift(69)

console.log(newArr)

const la = newArr.join()

console.log(la)
console.log(typeof la)
