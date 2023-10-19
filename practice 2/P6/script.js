// STRING COMPARISON

let str = "vishwajeet";

if ("vishwajeet == str"){
    console.log("Equal");
}else{
    console.log("Not Equal")
}


// CONCATINATION OF 2 STRING

let str1 = "vishwajeet";

let str2 = " kumar";

let str3 = str1.concat(str2);
                    //upar bracket mei coma deke more than 1 string ko concatinate kr skte ek baar mei

console.log(str3);


// SUBSTRING EXTRACT krna STRING mei se



// substr

let str4 = "This is javascript tutorial. it is a good tutorial.";

let substring = str4.substr(8,19);

console.log(substring);

// substring

let str5 = "This is javascript tutorial. it is a good tutorial.";

let substring1 = str4.substring(8,18);

console.log(substring1);

// indexof()------>>  ye btata ki kon kaha se start ho rha hai

let str6 = "This is javascript tutorial. it is a good tutorial.";

let position = str6.indexOf('good');

console.log(position);

//  lastIndexOf----->> agar piche se position jnanana ho kisi ka

let str7 = "This is javascript tutorial. it is a good tutorial.";

let position1 = str6.lastIndexOf('is');

console.log(position1);

// str.trim()---->> it removes extra space in string. (aage or piche se)
// trimStart() , trimEnd()


// toUpperCase
 let str8= "This is javascript tutorial. it is a good tutorial.";

    // let trimedStr = str8.toUpperCase();
    let trimedStr = str8.toLowerCase();

console.log(trimedStr);


// replace()



let str9= "This is javascript tutorial. it is a good tutorial.";

let trimedStr1 = str9.replace('good','the best');

console.log(trimedStr1);