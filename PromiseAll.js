//Waits till all promise passed then returns result after all Promise passed.
//If 1 fail also returns error immediately.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 Passed")
    }, 3000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P2 Rejected")
    }, 2000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2 Passed")
    }, 1000)
})

Promise.all([p1, p2, p3]).then((res) => {
    console.log(res)
})
.catch((err) => {
console.error(err)
})
