let str = "Akhilesh R Madhyastha"

console.log(str.indexOf("a"))
console.log(str.lastIndexOf("a"))
console.log(str.startsWith("A"))
console.log(str.endsWith("a"))
console.log(str.substring(5, 13)) // Does not accept negative value
console.log(str.slice(0,-2)) // Accepts negative value Removes last 2 characters from the string
console.log(str.charCodeAt("A")) // Gets ASCII value
console.log(str.includes("R M"))

const newStr = str.split(" ")
console.log(str.split(" "))
console.log(newStr.join(","))


// Interview Questions

// Truncate a string with ... if length > 9

let names = "Akhilesh R Madhyastha"
if(names.length > 9){
   console.log(names.replace(names.slice(9), "..."))
}
else{
    console.log(names)
}