console.log("This code is only supported for browser!")
let a = prompt("hey what is ur age?")
a = Number.parseInt(a)
console.log(typeof a)
if(a>18 && a<75){
    alert("This is a valid age")
}
else if(a==0){
    alert("Sorry! you are not eligible")
}
else{
    alert("Please enter a valid age")
}
console.log("All done")



console.log("switch case")
console.log("let's see the example")
let b = prompt("Choose a fruit which you want to buy \n orange \n apple \n grapes \n pomagranade \n papaya")
switch(b){
    case 'orange':
        console.log("RS 2")
        break;

    case 'apple':
        console.log("RS 3")
        break;
        
    case 'grapes':
        console.log("RS 4")
        break;
        
    case 'pomagranade':
        console.log("RS 4")
        break;
    case 'papaya':
        console.log("RS 5")
        break;
        
    default:
        console.log("Sorry, this fruit is out of stock")
}


let ter=10
console.log(ter<18? "yes" : "no")