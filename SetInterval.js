const sum = (a,b) => {
    console.log("Sum is ", a+b)
}

let timerId = setInterval(sum, 3000, 5,7)
console.log(timerId)
//To stop the interval running we use clear Interval with timer id

//clearInterval(timerId) //will return 1 in browser.
//used to cancel the timer using timerid.
