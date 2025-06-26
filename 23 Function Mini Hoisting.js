// Function Declaration = They are hoisted
// JavaScript moves them to the top of the scope before execution.
addOne(69)
function addOne(num) {
    return num + 1
}

// Function Expression = They are not hoisted
// JavaScript sees this like:
//let addTwo; // declared but not initialized (temporal dead zone)
//addTwo(68); // ❌ TypeError: addTwo is not a function
addTwo(68)
let addTwo = function (num) {
    return num + 2
}
