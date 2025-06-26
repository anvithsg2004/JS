fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())     // converts JSON response to JS object
    .then(data => console.log(data))       // handle data
    .catch(error => console.error(error)); // handle errors


//  With async/await
async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error("Fetch failed:", err);
    }
}

getUsers();
