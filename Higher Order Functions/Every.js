//Every method returns true only when all the elements of array satisifes the condition if any 1 element doesn't satisfy condition then it returns false

const arr = [0,2,4,6,8]

const newArr = arr.every((num, i) => {
      if(num%2===0){
        console.log(num, i)
    }
   return num%2===0
})

console.log(newArr)

//...................................................................................................
const arr2 = [0,2,4,1,6,8]

const newArr2 = arr2.every((num, i)=> {
    if(num%2!==0){
        console.log(i)    //returns the index which is odd.
    }
    return num%2===0
})

console.log(newArr2)