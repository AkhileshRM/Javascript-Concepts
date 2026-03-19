var myVar = 5;
      function b() {
        console.log("b", myVar);
      }
      function a() {
        console.log("a", myVar);
        var myVar = 2;
        b();
      }
 
      a();

      var greet = function(){
        console.log("Hello")
      }

      greet()


      // var x = 20
// function foo() { 
//     console.log(x)
//     var x = 10
// }
// foo()

// for(let i=1; i<=3; i++){
//     setTimeout(() => {
//         console.log(i)
//     },1000)
// }

// {
//     var c=1
// }
// console.log(c)


// foo()
// var foo = 100
// function foo(){
// console.log("Calling foo")
// }
// foo()

// function abc(){
//     console.log("hi")
// }
// const value = new abc()

// let arr = [1,2,3]
// arr[4] = 5
// console.log(arr)

// console.log(name)
// const name = "John banega Don"

// function foo() {
// console.log("Result")
// }
// const result = foo()
// console.log(result)

// function outer(){
//     function inner(){
//         console.log(x)
//     }
//     const x = 5
//     return inner
// }
// const inner = outer()
// inner()

// function foo(){
//     x = 10
// }
// foo()
// console.log(x)

// function foo(){
//   console.log(x)
//   x = 10
// }
// foo()

// hello()
// function hello(){
//     console.log("Calling Hello")
// }

// console.log(typeof null)
// console.log(typeof NaN)

// console.log('5' + 3)
// console.log('5' - 3)

// console.log(a)
// console.log(b)
// var a = b = 5

// let arr = [1,2,3,4,5]
// arr.length = 0
// console.log(arr)


// console.log(a())
// function a() {
//   var b = function() {
//     return 3;
//   };
//   return b();
//   var b = function() {
//     return 8;
//   };
// }

// var variable = 10;
// (()=>{
//    variable_3 = 35;
//    console.log(variable_3);
//    var variable_3 = 45;
//    variable_2 = 15;
//    console.log(variable);   
// })();

// console.log(variable_2);
// console.log(variable_3);
// var variable=30;

// var test = 1
// function functionHoisting(){
//    test = 10
//    return;
//    function test(){
//    }
// }
//    functionHoisting(); 
//    console.log(test)


// var temp = "hi"
// function display(){
//    console.log(temp)
//    var temp = "bye"
// }
// display()

// foo()
// function foo(){
//    console.log(1)
// }
// var foo = function(){
//    console.log(2)
// }
// function foo(){
//    console.log(3)
// }
// foo()

// var myVar = 5
// function b(){
//    console.log(myVar)
// }
// function a(){
// var myVar = 2
// b()
// }
// a()

// var x = 3
// function getSquare(n){
//    var square = n ** 2
//    return square
// }
// var theSquare = getSquare(x)
// console.log(theSquare)

// function Add(){
//    console.log(answer)
//    var answer = 2
// }
// Add()

// var temp = "hi"
// function display(){
//    console.log(temp)
//    var temp = "bye"
// }
// display()

// hi()
// var hi = function(){
//    console.log("hi")
// }

// var greet = function(){
//    console.log("Welcome")
// }
// greet()

// const e = 10
// function sum(a){
//    return function(b){
//       return function(c){
//          return function(d){
//             return a + b + c + d + e
//          }
//       }
//    }
// }
// console.log(sum(1)(2)(3)(4))

// var x = 10
// function foo(a){
//    var b = 20

//    function bar(c){
//       var d = 30
//       return boop(x + a + b + c + d)
//    }

//    function boop(e){
//       return e*-1
//    }
//    return bar
// }
// var moar = foo(5)
// console.log(moar(15))

function setCount(){
   let number = 0
   return function(){
     console.log(++number)
   }
}
const counter = setCount()
counter()
counter()
counter()