// Global variable vs Local variable

 let car = "Audi"; // Global variable //

 function add(){

     let result = 33; /* Local variable hai result. so, curly braces ke andar result 33 dega aur baahar undefined dega*/ 
     console.log(result)
 }

 add();

 console.log(car)