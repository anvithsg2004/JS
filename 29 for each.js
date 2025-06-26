let arr = ["Anvith", "SRK"]

arr.forEach(function (item) {
    console.log(item)
})

arr.forEach(function (item, index, arr) {
    console.log(item, " ", index, " ", arr)
})
