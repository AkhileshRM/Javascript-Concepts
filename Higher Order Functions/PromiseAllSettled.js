//Waits till all promise passed then returns result as array of objects with Fullfilled or rejected



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

Promise.allSettled([p1, p2, p3]).then((res) => {
console.log(res)
})
.catch((err) => {
    console.error(err)
})