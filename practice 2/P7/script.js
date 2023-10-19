// let book1 = "Maths";
// let book2 = "physics";
// let book3 = "Bio";
// let book4 = "Maths";

// console.log(book3);

let book = ["Math","physics","Bio","computer science"];

// let book = new Array("Math","physics","Bio","computer science");

console.log(book[ 3]) 


// book.length---->> array ka length btaega.
// book.push------->> ye new element ko last mei array ke add kr dega.
// book.unshift----->> ye new element ko starting mei add kr dega array ke.
// book.pop()----------->> array ke last element ko pop kega.
// book.shift()-------->> ye begining se pop krta hai element ko.
// book.splice()

book.splice(2,1);
console.log(book);


// book.indexOf ------>> to know position of specific element in array.
let position=book.indexOf("Bio");
console.log(position);



// concat() of two array

let book1 = ["Math","physics","Bio","computer science"];

let book2 = ["hindi","English"];

let NewBook = book.concat(book2);


console.log(NewBook);


// Array ke andar array (multi-dimensional array) 

let bookWithPages = [["Math","300"],["Physics","500"],["Bio","400"]];

let fetch = bookWithPages[1][0];

console.log(fetch);


// how to excess simultaneiusly one by one all element of array

let book3 = ["Math","physics","Bio","computer science"];

let booklength = book3.length;

for(i = 0; i < booklength; i++){
    console.log(`Element ${i} is ${book3[i]} \n`)
}












// forEach()

let book4 = ["Math","physics","Bio","computer science"];

book4.forEach(myfu);

function myfu(value){
    console.log(value);
} 