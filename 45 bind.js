
// Arguments are sent Individualy and returns a New function and not Invokes Immediately 

let user = {
    name: "Anvith S G",
    number: 8618785770
}

function greet(welcome) {
    console.log(`Hi ${this.name}, ${welcome}`)
}

let newFunction = greet.bind(user, "How are you?")

newFunction()
