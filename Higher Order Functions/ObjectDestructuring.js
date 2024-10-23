const values = [
    {names: undefined, sound:"meow",
        feedingRequirements:{
            food: 2,
            water: 3
        }
    },
    {names: "dog", sound: "bow"}
]

const [cat, dog] = values;
const {names: nickname="pusycat", sound: meyow, feedingRequirements: {food, water}} = cat
const {names: doggy, sound: bows} = dog

console.log("Cat", nickname, meyow)
console.log("Dog", doggy, bows)

console.log("Nested Objects", food, water)


//Functions based Destructuring

function useAnimals(animal){
    return [
        animal.names,
        function(){
            console.log("Animal Sound is ", animal.sound)
        }
    ]
}

const [animalCat, animalDog] = values
console.log(useAnimals(animalDog))

const [dogs, dogSound] =  useAnimals(animalDog)
console.log("Function value", dogs)
dogSound()




// const vehicles = [
//     {brand: "maruthi", years: 25},
//     {brand: "tata", years:50}
// ]

// function useVehicles(vehicle){
// return [
//     vehicle.brand,
//     function(){
//         console.log("Number of years is ", vehicle.years)
//     }
// ]
// }

// const [suzuki, motors] = vehicles
// const [brandName, numYears] = useVehicles(motors)
// console.log(brandName)
// numYears()

const cars = [
    {
        model: "Honda Civic",
        coloursByProduct: ["black", "silver"],
        speedStats:{
            topSpeed:140,
            zeroToSixty:8.5
        }
    },
    {
        model: "Tesla",
        coloursByProduct: ["red", "white"],
        speedStats:{
            topSpeed:150,
            zeroToSixty:3.2
        }
    }
]

const [car1, car2] = cars
const {model: model1, coloursByProduct: [hondaColor], speedStats: {topSpeed: hondaTopSpeed}} = car1
const {model: model2, coloursByProduct:[teslaColor], speedStats: {topSpeed: TeslaTopSpeed}} = car2

console.log("Brands are", model2, model1)
console.log("Top Speeds are", TeslaTopSpeed, hondaTopSpeed)
console.log("Top Color", teslaColor, hondaColor)