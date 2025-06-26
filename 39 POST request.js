async function run() {

    // fetch() only throws an error on network failure — not for status like 404 or 500.

    try {
        let user = {
            name: "Anvith",
            number: 8618785770
        }

        let response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

        let data = await response.json()

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

run()
