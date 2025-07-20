//Given an array of objects, write a function that returns a new array with only the names of each object.

// Practice set URL

// https://adi22maurya.medium.com/javascript-higher-order-functions-practice-questions-acdf8453c666
const arrofObjects = [
    {
       firstName: "Akhilesh",
       lastName:"R Madhyastha",
       age:24,
       money:45000,
       location:"Bangalore",
       completed: true
    },
    {

        firstName: "Sharma",
        lastName:"Rao",
        age:25,
        money:50000,
        location:"Bangalore",
        completed: false
    },
    {
        firstName: "Verma",
        lastName:"Patel",
        age:26,
        money:100000,
        location:"Bangalore",
        completed: true
    }
]

const arrayString = [
    "akhilesh", "madhyastha", "raghavendra", "shalini"
]

const orders = [
    {
    product: "phone",
    cost: 15000,
    },
    {
        product: "laptop",
        cost: 50000
    },
    {
        product: "phone",
        cost: 20000
    },
]

// const result = orders.reduce((acc, cur) => {
// const {product, cost} = cur
// if(acc[product]){
// acc[product]+=cost
// }
// else{
//     acc[product] = cost
// }
// return acc
// }, {})

// console.log(result)





// const newArr = arrofObjects.filter((cur) => {
// return cur.completed === true
// })

// console.log(newArr)

// const arrayString = [
//     "akhilesh", "madhyastha", "raghavendra", "shalini"
// ]

// const newString = arrayString.map((x) => {
//     return x.length
// })
// console.log("New String" +  newString)



// const fullName = arrofObjects.map((x) => {
//     return x.firstName + " " + x.lastName
// })
// console.log(fullName)

// const capitalString = arrayString.map((x) => {
//     return x[0].toUpperCase() + x.slice(1)
// })

// console.log("Capital String is ",capitalString)

// const namePrice = arrofObjects.map((x) => {
//     return x.location + x.age
// })

// console.log("Name and Price is ", namePrice)

// const arrofNumbers = [100, 200, 300, 400, 500]

// const avgofNumbers = arrofNumbers.reduce((acc, cur) => {
// acc += cur
// return acc
// }, 0) 

// console.log(avgofNumbers/arrofNumbers.length)

// const orders = [
//     {
//     product: "phone",
//     cost: 15000,
//     },
//     {
//         product: "laptop",
//         cost: 50000
//     },
//     {
//         product: "phone",
//         cost: 20000
//     },
// ]

// const totalcosts = orders.filter((x) => {
// return x.product === "phone"
// }).reduce((acc, cur) => {
// acc+= cur.cost
// return acc
// }, 0)

// console.log(totalcosts)

// const nameAndPrice = orders.map((x) => {
//     return x
// }).map(x => {
//     return x.cost
// })

// console.log("Name and Price " + nameAndPrice)

// const evenNumbers = [1,2,3,4,5,6,7,8,9,10]

// const resultingEven = evenNumbers.reduce((acc, cur) => {
// if(cur%2===0){
//     acc+=cur
// }

// return acc
// }, 0)

// console.log(resultingEven)

// const students = [
//     {
//         names: "Akhilesh",
//         age: 24
//     },
//     {
//         names: "Dharma",
//         age: 19
//     },
//     {
//         names: "Suresh",
//         age: 18
//     }
// ]

// let result = students.filter((x) => {
//     return x.age < 20})
// .reduce((acc, cur) => {
// acc+=cur.age
// return acc
// }, 0)

// console.log(result)

let newData = [
    {
"name": "John",
"age":24,
"gender":"male",
"country":"USA"
    },
    {
"name": "Jane",
"age":32,
"gender":"female",
"country":"Canada"
    },
    {
"name": "James",
"age":20,
"gender":"male",
"country":"USA"
    }
]

// const finalResult = newData.sort((a, b) => {
//     return a.age - b.age
// })
// console.log(finalResult)

// const alphabeticalOrder = newData.sort((a, b) => {
//     if(a.name > b.name) return 1
//     else if(b.name > a.name) return -1
//     else return 0
// })
// console.log(alphabeticalOrder)