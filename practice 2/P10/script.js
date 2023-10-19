// THE ARGUMENTS Object

function add(){

    console.log(arguments.length);
}

add(5,6);
add(5,6,7);
add(5,6,7,8);

// .......2

function add1(){

    console.log(arguments[3]);
}

add(5,7,8);



// Agar ek bhi argument nhi passed hain to

function add2(){

    if(arguments.length == 0){

        console.log("No Argument passed !!");

    }
    
}

add2();


// question


function add3(){

    if(arguments.length == 0){

        console.log("No Argument passed !!");

    }else{
        let sum = 0;
        for(let i = 0; i < arguments.length; i++){
           sum = sum + arguments[i];
        }
        console.log(sum);
    }
    
}

add3(5,7);

