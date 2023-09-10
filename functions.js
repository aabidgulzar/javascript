
function myFirstFunction(){
    var myString = "its a function";
    var myUpperString = myString.toUpperCase();
    console.log(myString);
    console.log(myUpperString);
}
myFirstFunction();




//For browser
/*ageCheck();
function ageCheck(){
    var check = prompt("what is ur age");
    check = Number.parseInt(check);
    if(check<9){
      console.log("you r not elgible");
    }
    else{
        console.log("welcome to our code school");
    }
}
*/






//parameters
function addNums(num1, num2){
    var sum=num1+num2;
    console.log(sum);
}
addNums(10, 20);






//returning data by functions
function returnFunc(num3, num4){
    var sum2=num3+num4;
    return sum2;
}
console.log(returnFunc(30,50));





//random function
function randomInt(min , max){
    var numOfValues = max-min+1;
    var randomNum = Math.random();
    var randomVal = randomNum*numOfValues; //rand no.s to 6
    var randRound = Math.floor(randomVal); //round off decimal digits
    console.log(randomVal);
    console.log(randRound);
}
randomInt(5, 10);





//Random fruits



function randomFruits(){
    return Math.floor(Math.random()*6);
}
var fruits = ['Apple','Grapes','Banana','Mango','Apricot','Cherry','Orange'];
console.log(fruits[randomFruits()]);


//Anonymus functions i.e, assigning functions to variables.....
var welcome = function(){
    console.log("hello its a ananymus function");
}



//Arrow functions
var q = "its an arrow function"
var captaliseArrow = anyString => anyString.toUpperCase();
console.log(captaliseArrow(q))



//functions and methods
//abc.splice();  abc.sort(); these are methods
//addFunction(); abcFunction(); are functions   // actually all functions in js are methods

