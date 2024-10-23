const radius = [1,2,3,4,5]

const area = (radius) => {
    return Math.PI * radius * radius
}

const circumference = (radius) => {
    return 2 * Math.PI * radius
}

const diameter = (radius) => {
    return radius * 2
}

const calculate = (radius, logic) => {   // logic is the callback function
 const output = []

 for(let i=0; i<radius.length; i++){
   output.push(logic(radius[i]))
 }
return output
} 

// console.log(calculate(radius, area))
// console.log(calculate(radius, circumference))
// console.log(calculate(radius, diameter))

/*..........................Second Approach without calculate method using map.....................................................*/

console.log(radius.map(area))
console.log(radius.map(circumference))
console.log(radius.map(diameter))




