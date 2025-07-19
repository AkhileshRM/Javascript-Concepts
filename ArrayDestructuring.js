const vehicle = ['Honda Dio', 'Activa', 'Bajaj']

const [a,,] = vehicle // Put empty comma if value is not needed and order is important

console.log(a)

const [b,c,d] = vehicle

console.log(b)
console.log(c)
console.log(d)

const cars = ['Maruthi', 'Hyundai', 'Tata']

const [g,h,i,j]  = cars

console.log(g, h, i, j) // j is undefined

//To swap 2 numbers without 3rd number

let school = 1
let college = 2
console.log(school, college);  // Semicolon is important otherwise will get undefined
[school, college] = [college, school]

console.log(school, college)


const aeroplane = ["indian airlines", "american airlines", ["helicopters", "jet"]]
const [india, america, [helipad1, helipad2]] = aeroplane
console.log(helipad1)
console.log(helipad2)