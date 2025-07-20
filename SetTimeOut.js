const greeting = (x,y) => {
    console.log(x,y)
}

setTimeout(greeting, 3000, "Akhilesh is a React Developer", "Hi") //depends on the numer of parameters.


let timerId = setTimeout(() => {
console.log("Welcome")
setTimeout(() => {
console.log("Hello")
}, 10000)
}, 6000) // outer loop first and then inner loop 
//          i.e after 6 seconds Welcome and after 6+10=16 seconds Hello is printed

console.log(timerId) // will return 1 on the browser
//clearTimeout(timerId) // used to cancel the timer using timerid

setTimeout(() => {
    console.log("Javascript")
},5000)

setTimeout(() => {
    console.log("Java")
},1000)


