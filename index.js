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