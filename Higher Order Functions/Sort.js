const humans = ["Akhilesh", "Sachin", "Bharath"]
console.log(humans.sort())
console.log("Descending order strings", humans.sort((a, b) => b.localeCompare(a)))//ASCII comparision

//It will print string at last if number string is there then it converts string to number

const animals = ["Lion", "Tiger", "7", 5, 10]
console.log(animals.sort())


// a - b is Ascending order.
const numbers = [50,25,10,1,2]

console.log(numbers.sort((a,b) => {
    return a - b
}))

// b - a is Descending order

console.log(numbers.sort((a, b) => {
    return b - a
}))


const students = [
    { name: "Alex", grade: 15 },
    { name: "Devlin", grade: 15 },
    { name: "Eagle", grade: 13 },
    { name: "Sam", grade: 14 },
  ];

  console.log(students.sort((a, b) => {
    return a.grade - b.grade
  }))

  //Objects based on strings in descending order

  console.log(students.sort((a,b) => {
   firstName = a.name               
   lastName = b.name
   if(firstName > lastName) return -1
   else if(lastName > firstName) return 1
   else return 0
  }))