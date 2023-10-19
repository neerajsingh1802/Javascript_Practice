// RETURNING A VALUE


// Return ka concept------->>> Return ka mtlb ye function jo abhi execute hua hai. ye pura jb execute ho jaaega to kuch return krega.

// function add(a,b){
//     let d = a+b;
//     return d;
// }
// let c = add(5,6);

// document.write(c);


function add(a,b){
    let d1 = [2,3,4];
    return d1;
}
let c1 = add(5,6);

document.write(c1);


// #NOTE--->> agar hm multiple return use kr rhe hai to ek baar check kr lenge ki kis condition mei phla return mil rha hai. agar usko phla return phle hi mil gya to
// uske niche ka code execute( yani ki nhi chlega ) nhi hoga.


function compare(a,b){
    if(a > b){
        return 1;
    }
    else if(b > a){
        return -1
    }else{
        return 0;
    }
}

let c = compare(5,6);

document.write(c);



// ^
// |
// |
// upar hmne 3 return use kiya hai, lekin khaas baat ye hai ki 3no return ek condition pr mil rha hai. phla return milte hi function ke andar execution band ho jaaega.
