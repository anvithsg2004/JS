let promise = new Promise(function (resolve, reject) {
    let bo = true

    if (bo) {
        let user = {
            name: "Anvith",
            number: 8618785770
        }
        resolve(user)
    } else {
        reject("Error")
    }
})

let result = promise
    .then(function ({ name, number }) {
        return { name, number }
    }).catch(function (eroro) {
        return eroro
    })


// .then() and .catch() return a Promise, not the actual value.
console.log(result)
