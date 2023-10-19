// OBJECT METHOD ---->> object ke function ko hm method bolenge.
/*koi bhi function jo 'object' ke sath juda hua ho usse hm "method" bolenge aur wo function kuch kaam krega.*/

/* hm 4 tarike se method bna skte hai*/

let person = {
    firstName: 'Neeraj',
    lastName: 'kumar'
};

person.age = 25;

/* Method 1:*/

// person.sayHello = function(){
//     console.log("Hello !");

// }

// person.sayHello();



/* Method 2:*/

function greet(){
    console.log("Hello !!");
}

person.sayHello = greet;

person.sayHello();



/* Method 3:*/

let person1 = {
    firstName: 'Neeraj',
    lastName: 'kumar',
    sayHello:function(){
            console.log("Hello !!!");
        
         }
};

person1.age = 25;

person1.sayHello();

/*Method 4:*/
let person2 = {
    firstName: 'Neeraj',
    lastName: 'kumar',
    sayHello:function(){
        console.log("Hello !!!!");
    }
};

person.age = 25;

person2.sayHello();

 
    
