(function sayHi() {
    console.log("Hi")
})();


; (() => {
    console.log("Hi")
})();

; ((name) => {
    console.log(`Hi, ${name}`)
})("Anvith");
