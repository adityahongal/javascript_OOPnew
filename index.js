// Object literal tutorial

// const circle = {};  circle is an object & {}; curly braces is object literal syntax

// const circle = {
//    radius:1,                                   //-------> properties
//    location : {
//        x:1,
//        y:1
//    },
//    draw: function(){                          //-------> Method/function
//        console.log('draw');
//    }
// };
// circle.draw();                                 //-------> We can access members using dot notation

// Factories in objects tutorial 
 // FACTORY FUNCTION

 // function createCircle(radius){                    //-------> Factory function 
 //   return{
 //       draw: function(){
 //           console.log('draw');
 //       }
 //   };
 // }
 // const circle = createCircle(1);
 // circle.draw();

 //  Constructors in OOPS

 //  Constructor Function

 // 1. No use of return function inside body.
 // 2. We use upper Case letter to define an object, .
 // 3. we use this keyword to define properties and method.
 // 4. We use new operator to return object from the function Circle.

 // function Circle(radius){                       //-------> syntax with upper case & parameter radius
 //    this.radius = radius;                       //-------> BODY with this keyword, also properties of circle
 //    this.draw = function(){                     //-------> Method
 //        console.log('draw');
 //    }
 //   }
 // const another = new Circle(1);                 //-------> New operator