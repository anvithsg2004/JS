let promise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        console.log("Hi ANVITH")
        // resolve() does not immediately run the .then() callback.
        // It schedules it to run after the current call stack clears — via the microtask queue.
        resolve()
    }, 2000)

})

promise.then(function () {
    console.log("Task Finised")
})
