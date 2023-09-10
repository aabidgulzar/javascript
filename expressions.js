let age =  prompt("what is your age")
age = Number.parseInt(age)
if(age>10 && age<20){
    console.log("your age lies b/w 10 & 20")
}
else{
    console.log("your age dosen't lie b/w 10 & 20")
}

switch(age){
    case 1:
         console.log("your age is 1")
         break;
    case 2:
         console.log("your age is 2")
         break;
    case 3:
         console.log("your age is 3")
         break;
    case 4:
         console.log("your age is 4")
         break;
    case 5:
         console.log("your age is 5")
         break;
    default:
         console.log(age)
         break;
}