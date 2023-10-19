function MulTable(num){
//                 ||
//                 || isko hm log parameter kahte hai aur jo value pass krte hai usko argument bolenge.
    for(i=1; i<=10; i++){
        document.write(`${num} x ${i} = ${num*i}`);
        document.write("<br>");
     }
    document.write("<br><br>");
}

MulTable(11);
//       ||----->> isko hm log argument khte hai.
document.write("<br>");

MulTable(6);







// 2 ARGUMENT KO PASS KRNE WALE FUNCTION

function add(num1, num2){
    document.write(num1+num2);
}

add(5,7);
