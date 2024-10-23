const arr = [1,2,3,5,4] 

const result = arr.reduce((acc, curr) => {
if(curr > acc){
    acc = curr
}
  return acc
}, 0)

console.log(result)

const users = [
  {firstName: "Akhilesh", lastName:"Madhyastha", age:24},
  {firstName: "Akshay", lastName:"Saini", age:25},
  {firstName: "Legend", lastName:"Hero", age:31},
]

const output = users.reduce((acc, curr) => {
if(curr.age < 30){
  acc.push(curr.firstName)
}
return acc
}, [])

console.log(output)