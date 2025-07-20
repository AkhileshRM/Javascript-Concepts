let user1 = {
    firstName:"Akhilesh",
    lastName:"R M"
}

let user2 = Object.assign({}, user1) // Shallow Copy

user2.lastName = "R Madhyastha"

console.log(user1)
console.log(user2)

// In ES6 new technique to copy objects will be to use spread operator

let car1 = {
    name:"Suzuki",
    color:"red"
}

let car2 = {...car1} //Shallow Copy but note that nested objects or arrays will still point to same memory

car2.color="white"

console.log(car1)
console.log(car2)

// To make a deep copy of nested objects use JSON methods stringify and parse

let bike1 = {
    name:"Honda",
    model:{
        modelName : "dio",
        modelColor: "grey"
    }
}

let bike2 = {...bike1} // This will not copy nested objects

let DeepCopyBike = JSON.parse(JSON.stringify(bike1))
DeepCopyBike.model.modelName = "Activa"
console.log(DeepCopyBike)
console.log(bike1)