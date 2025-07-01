// Example for React.js
function Parent() {
    let name = "Anvith S G"
    return <Child name={name} greet="Welcome to my hotel" />
}

function Child(props) {
    console.log(`My name is ${props.name} and ${props.greet}`)
}


// Just for learning

// Parent function (passes props to child)
function Parent() {
    let name = "Anvith S G";
    Child({ name: name, greet: "Welcome to my hotel" });
}

function Child(props) {
    console.log(`My name is ${props.name} and ${props.greet}`);
}

Parent()
