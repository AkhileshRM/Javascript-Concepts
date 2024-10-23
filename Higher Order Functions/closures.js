function z(){
    function y(){
        var a = 100
        function x(){
         console.log(a)
        }
        x()
    }
    return y
}
let result = z()
result()


for(var i=0; i<3; i++){
    function close(x){    //close is closure function to solve issues and prventing from printing 333.
        setTimeout(() => {
            console.log(x)
        },x * 1000)
    }
    close(i)
}


function parent(){
    var x = 100
function child(){
    console.log("Result is", x)
}
return child
}
var results = parent()
results()