//Functions with Closures

//Currying definition - Currying transforms a function with multiple arguments into a sequence/series of functions each taking a single argument. So a function like func(a,b,d) can be transformed into func(a)(b)(d).
//Currying takes advantage of closures by creating functions that return other functions. Because these functions have persistent memories, we are able to access variables “outside” of nested functions.

function curry(fun){
    return (a) => (b) => fun(a,b)
}

const sum = (a,b) => {
    return a + b
}

const sumNumbers = curry(sum)
// console.log(sumNumbers(1)(2)) //Method 1 returns 3
const addOne = sumNumbers(1)
console.log(addOne(2)) // Method 2 using extra variable returns 3 


/*..................................Currying.js..............................................................*/

//First Approach
let personalDetails = 
name => 
MID => 
age => 
name + " " + MID + " " + age

console.log(personalDetails("Akhilesh")(61074322)(24))

//Second Approach
firstName = personalDetails("Akhilesh")
MIDno = firstName(1074322)
console.log(MIDno(24))

let company =
servicebasedIT => 
productbasedIT =>
consultingFirms => 
servicebasedIT + " " + productbasedIT + " " + consultingFirms

console.log(company("LTIMindtree")("Microsoft")("Deloitte"))

service = company("LTIMindtree")
product = service("Microsoft")
console.log(product("Deloitte"))