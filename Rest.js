//Rest takes in individual values and combines it in an array or object.

function Add(a,b,c, ...rest){
    console.log("Rest gives array", rest)
    console.log(rest[1]) // To get values
    return a + b + c
}

Add(1,2,3,4,5,6,7)

//Object

var students = {
    names:"Akhilesh",
    age:25,
    gender:"male"
}

const {...rest} = students
console.log(rest)