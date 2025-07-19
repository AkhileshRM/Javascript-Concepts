var myVar = 5;
      function b() {
        console.log(myVar);
      }
      function a() {
        console.log(myVar);
        var myVar = 2;
        b();
      }
 
      a();

      var greet = function(){
        console.log("Hello")
      }

      greet()