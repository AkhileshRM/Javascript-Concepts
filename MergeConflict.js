//Rest takes in individual values and combines it in an array or objects.

function Add(a,b,c, ...rest){
    console.log("Rest gives array", rest)
    console.log(rest[1]) // To get values
    return a + b + c
}

Add(1,2,3,4,5,6,7,8)

//Object

var students1 = {
    names:"Akhilesh R M",
    age:25,
    gender:"male"
}

const {...rest} = students1
console.log(rest)