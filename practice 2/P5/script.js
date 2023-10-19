// TYPE OF CONVERSION


let type = 5+null;
console.log(type);
console.log(typeof type);

let type1 = "5"+null;
console.log(type1);
console.log(typeof type1);

let type2 = "5"+3;
console.log(type2);
console.log(typeof type2);

// + operator number ko bhi add krta aur string ko bhi but - operator string ko number bna ke subtract kr deta


let type3 = "5"-3;
console.log(type3);
console.log(typeof type3);

// *operator bhi string ko number bna deta but alphabet wale string ko number mei convert na kr pata NaN likh deta

let type4 = "5"*6;
console.log(type4);
console.log(typeof type4);


let type5 = "5"*"yes";
console.log(type5);
console.log(typeof type5);








//1. String()
// 2. Number()
// 3. Boolean()





// 1.SRING()
 
// let type6 = 4;
let type6 = false
console.log(typeof type6);

let NewType = String(type6);
console.log(typeof NewType);



// 2.NUMBER()

// let type7 = false
let type7 = "32"
console.log(typeof type7);

let NewType1 = Number(type7);
console.log(typeof NewType1);



// BOOLEAN()


let type8 = "32"
console.log(typeof type8);

let NewType2 = Boolean(type8);
console.log(typeof NewType2);

