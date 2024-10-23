//It returns values of First settled Promise it can either be resolved or rejected, 
//that is success or failure

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
        resolve("P3 Passed")
    }, 1000)
})

Promise.race([p1, p2, p3]).then((res) => {
console.log(res)
})
.catch((err) => {
    console.error(err)
})