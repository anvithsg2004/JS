let promise = new Promise(function (resolve, reject) {
    let bo = true

    if (bo) {
        let user = {
            name: "Anvith",
            number: 8618785770
        }
        resolve(user)
    }
    else {
        reject("ERROR")
    }
})

// promise.then(function (user) {
//     console.log(user)
// }).catch(function (error) {
//     console.log(error)
// })

async function run() {
    try {
        let user = await promise
        console.log(user)
    } catch (error) {
        console.log(error)
    }
}

run()
