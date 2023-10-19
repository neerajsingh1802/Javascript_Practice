// if input = 1,"y","yes" output = continue...
// if input = 0,"n","no" output = End...

 let input;

 input = "n";

// if(input === 1){
//     document.write("continue...");
// }
// else if(input === "y"){
//     document.write("continue...");
// }else if(input === "yes"){
//     document.write("continue...");
// }else if(input === 0){
//     document.write("end...")
// }else if(input === "n"){
//     document.write("end...");
// }else if(input === "no"){
//     document.write("end...");
// }else{
//     document.write("Wrong inpu t")
// }

switch(input){
     case 1:   // if(input === 1)
        document.write("continue...");
        break;
      case "y": // if(input === "y")
        document.write("continue...");
        break;
      case "yes": // if(input === "yes")
         document.write("continue...");
         break;
      case 0:   // if(input === 0)
         document.write("end...");
         break;
      case "n":   // if(input === "n")
         document.write("end...");
         break;
      case "no":   // if(input === 1)
         document.write("continue...");
         break;
      default :
          document.write("wrong input")
    }
