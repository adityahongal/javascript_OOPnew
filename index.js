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
 //       radius,
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

 // CONSTRUCTOR properties
 // FACTORY FUNCTION

 // function createCircle(radius){                    //-------> Factory function 
 //  return{
 //     radius,
 //     draw: function(){
 //          console.log('draw');
 //      }
 //  };
 // }
 // const circle = createCircle(1);     
 // In console use command for output ---> circle.constructor

 // Constructor function
 // function Circle(radius){                       
 //    this.radius = radius;                       
 //      this.draw = function(){                     
 //           console.log('draw');
 //      }
 //     }
 //    const another = new Circle(1);
 // In console use command for output ---> another.constructor

 // Primitive/value types versus Reference types
 // PRIMITIVE TYPE
 // let x  = 10;                               // Independent variable
 // let y = x;                                 // Independent variable
 // x = 20;
 // for output type x in console and after that type y in console, They give seperate outputs cz of Independent variables

 // REFERENCE TYPE
 //  let x = {value : 10};                         // Object is used
 //  let y = x;
 //   x.value = 20 ;
 // for output type x in console and after that type y in console, They give same outputs cz of object.

 // ENUMERATING PROPERTIES
 // function Circle(radius){                       
 //       this.radius = radius;                       
 //        this.draw = function(){                     
 //             console.log('draw');
 //        }
 //  }

 //   const circle = new Circle(10);

 // for (let key in circle){                                   // "for in" operator
 //       if (typeof circle[key] !== 'function')
 //       console.log(key, circle[key]);
 // }

 // const keys = Object.keys(circle);                          // is used to get all keys in object
 // console.log(keys);

 // if('radius' in circle)                                     // "in" operator is used to check if aa object has given property
 //   console.log('Circle has a radius');
 
 // How to implement ABSTRACTION in Javascript

 // We can define them as variables (let  defaultLocation) instead of (this.defaultLocation)
 // Only essentials property and method is shown to public, rest all will be hidden.
 // We can access only "circle.draw & circle.radius" members of circle object and cannot access hidden members like "defaultLocation"

 // function Circle(radius){
 //   this.radius = radius;                                   // This will be shown
//
 //   let defaultLocation = {x :0, y:0};                      // we declare them as variable to hide them
 //   
 //   let computeOptimumLocation = function(factor) {        // we declare them as variable to hide them
 //       //...
 //   }
 //   this.draw = function(){                                // This will be shown
 //       computeOptimumLocation(0.1);
 //       console.log('draw');
 //   };
 // }
 // const circle = new Circle(10);
 // circle.draw();                                         // after typing "circle." we can access only draw & radius and other members like defaultLocation will be hidden
