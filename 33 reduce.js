let myNum = [1, 2, 3]

let newNum = myNum.reduce((acc, currVal) => {
    return acc + currVal
}, 0)

console.log(newNum)
