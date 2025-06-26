const scores = [95, 88, 76];

// Old way
let first = scores[0];

// ✅ Destructuring
const [math, physics, chemistry] = scores;

console.log(math);     // 95
console.log(chemistry); // 76
