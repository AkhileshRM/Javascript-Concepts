//In Some method if any 1 condition satisfies it will return true and stop looping through the remaining elements of the array.

const arr = [0,2,4,6,3,8]

let result = arr.some((num, i) => {
return num % 2!==0
})

console.log(result)

// To return the index of array which is odd
let result1 = arr.some((num, i)=> {
    if(num%2===1){
       console.log(i)  //returns index of odd
    }
    return num%2===1
})

console.log(result1)