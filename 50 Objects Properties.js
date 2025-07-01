let user = {
    name: "Anvith S G",
    numeber: 8618785770
}

console.log(Object.getOwnPropertyDescriptor(user, "name"))

Object.defineProperty(user, "name", {
    writable: false,
    enumerable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(user, "name"))
