let arr = [1, 2, 5, 3, 4, 9, 7, 5, 69, 5, 1, 5, 5, 6]

let result = arr.filter((element) => {
    return element > 5
})

console.log(result)

// Same in forEach

let newArr = []

arr.forEach((num) => {
    if (num > 5) {
        newArr.push(num)
    }
})

console.log(newArr)
