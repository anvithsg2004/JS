// Key is unique
let map = new Map()

map.set(0, "Anvith S G")
map.set(1, "SRK")
map.set(2, "Both are Kings")

console.log(map)

// This will give me the compelete Map like Key Value Pair
for (let key of map) {
    console.log(key)
}

// Here we are destructuring the map 
for (let [key, Value] of map) {
    console.log(key, " ", Value)
}

