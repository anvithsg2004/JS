let fruit = "Apple"

switch (fruit) {
    case "Apple":
        console.log("You are APPLE")
        break
    case "PineApple":
        console.log("You are PINEAPPLE")
        break;
    default:
        console.log("YOU ARE NOTHING")
        break
}


let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
}


let grade = "B";

switch (grade) {
    case "A":
    case "B":
    case "C":
        console.log("You passed!");
        break;
    case "D":
    case "F":
        console.log("You failed.");
        break;
    default:
        console.log("Invalid grade.");
}
