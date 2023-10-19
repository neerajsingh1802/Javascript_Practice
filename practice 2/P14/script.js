// OBJECT ----->> jo real mei object hota hai programming mei bhi whi object hota hai.


// DIFFERENCE BETWEEN OBJECT AND ARRAY
/* curly braces aur square bracet ka hota */

let person = {};

console.log(person);

// 2

let person1 = {
    firstName: 'vishwajeet',
    lastName: 'Kumar'
};

console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);

// #NOTE#  -->> object ke property ko do tarike se excess kiya jaa skta hai
/*  1-->> dot(.) Notation
    2-->> Array([]) Notation  */

    console.log(person1['lastName']);


// #NOTE# -->> koi bhi property jo exist nhi krta hai uska output "undefined" aaega.

// MODIFICATION OF OBJECT

let person2 = {
    firstName: 'vishwajeet',
    lastName: 'Kumar'
};

person2.firstName = 'jeet';
console.log(person2.firstName);

console.log(delete person2.lastName);

//  HAM CHAHTE PERSON NAAM KE OBJECT KE SARE PROPERTIES KO DEKHNA

let person3 = {
    firstName: 'vishwajeet',
    lastName: 'Kumar'
};

person3.age = 25;
person3.phone = 8299390095;

for(let key in person3){
    console.log(key);
}


/* "key" ke sath sath "value" bhi chahiye*/

let person4 = {
    firstName: 'vishwajeet',
    lastName: 'Kumar'
};

person4.age = 25;
person4.phone = 8299390095;

for(let key in person4){
    console.log(key + ": " +person4[key]); 
}

/* jab loop ke andar chla rhe (one by one excess all properties of object) to dot notation kaam nhi krega bs array notation kaam krega .*/





