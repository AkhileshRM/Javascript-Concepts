let name = {
    firstName: "Sachin",
    lastName:"Tendulkar",
    printfullName: function(hometown, state){
        console.log(this.firstName + " " + this.lastName + " "+hometown, state)
    }
}

let name2={
    firstName:"Akhilesh",
    lastName:"R Madhyastha"
}

//function borrowing or creates copy
name.printfullName.call(name2, "Bangalore ", "Karanataka") //Bangalore is the parameter

name.printfullName.apply(name2, ["Bangalore", "Karanataka"])

//The only difference between call and apply is in call we use individual values
//In apply we use an array.

//The difference between call and bind is bind will hold copy of the function without invoking it where as call will invoke it immediately.
//We can use it to be invoked later.


let printMyname = name.printfullName.bind(name2, "Bangalore ", "Karanataka")
console.log(printMyname)  // Bind will return a function will not invoke a function.


//Calling later we need to do when ever required.
printMyname()