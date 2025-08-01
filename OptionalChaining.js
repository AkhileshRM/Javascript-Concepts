const vehicles = {
    car:"Maruthi",
    bike:"Splendor",
    scooter:"dio",
    truck:{
        brand:"Ashoka"
    }
    // getFullName: () => {
    //     console.log(this.car)
    //     return this.car
    // }
}

console.log(vehicles.truck.road?.blocks) //objects check

const developers = [
    {tech:"Javascript"},
    {tech:"Python"},
    {tech:"Java"}
]

console.log("Car name is ", vehicles?.getFullName?.()) // We will get undefined not error.

console.log(developers[5]?.tech) //Arrays check

let user1 = () => console.log("Alex");
let user2 = {
    dog() {
        console.log("I am Alex");
    }
}
let user3 = {};

console.log(user1?.())
console.log(user2.dog?.())  // Functions check
console.log(user3.dog?.())
 
//             or

//You can add multiple question mark checks at the beginning for example

console.log(user2?.dog?.())
console.log("Undefined", user3?.dog?.())