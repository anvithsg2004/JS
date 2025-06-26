let obj1 = { 1: "A", 2: "B" }
let obj2 = { 3: "C", 4: "D" }

// Shallow Copy
// The references are copied — not the actual values
// Primitive (string, number)	Value	    ❌ No
// Object / Array	            Reference	✅ Yes(shallow copy only)
let obj3 = { ...obj1 }
console.log("Original ", obj3)
obj3["1"] = "E"
console.log("Modified ", obj1)
console.log("Modified ", obj2)
console.log("Modified ", obj3)

let obj4 = {
    name: "Anvith",
    details: {
        city: "Bengaluru",
        skills: ["JS", "Java"]
    }
};

let deep = structuredClone(obj4)

deep.details.city = "Delhi";
console.log(obj1.details.city); // ✅ Still "Mumbai" — deep copy is safe
