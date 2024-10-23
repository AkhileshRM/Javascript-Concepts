// Spread takes in array  or object and returns individual values

var names = ["Akhilesh", "Ajay", "Vijay"];

function getNames(name1, name2, name3){
    console.log(name1, name2, name3)
}

getNames(names)
getNames(names[0], names[1], names[2])
getNames(...names) // Using Spread Operator


//Object
//to override values in object we need to use spread operator

var students = {
    names:"Akhilesh",
    age:24,
    gender:"male"
}

console.log(students)

var newStudents = {
    ...students,          //Previous values
    age:25,   
    names:"Akhilesh R Madhyastha" //Overriding with new values using spread interview question
}

console.log(newStudents)