console.log("primitives : 7 in js") //nn bb ss u
let a = null;
let b = 345;
let c = true;  //can also be false
let d = BigInt("567")
let e = "Aabid"
let f = Symbol("i am a symbol")
let g = undefined  // '= undefined' not necessary;
console.log(a,b,c,d,e,f,g)
console.log(typeof a , typeof b, typeof c, typeof d,typeof e , typeof f,typeof g)


//objects
console.log("Non primitive:objects")
const item={
    "hello":true,
    "its":false,
    "me":11,
    "aabid":undefined
}
console.log(item["me"])


console.log(d+e)//practice 
console.log(typeof d+e) //practice 
const k ={   //practice 
    name: "aabid",
    section: 1,
    isPrincipal: false
} 
// k="gygvvvvv" // error
k['isPrincipal']=1 //possible
console.log(k)



//practice
const dict ={
    appreciate: "Recognize the full worth of.",
    strong: "Having a good capability to do something",
    anexity: "An intention in mind to do something",
    betray: "End up with someone by cheating",
    goblin: "A dirty creature who tricks and traps people"
}
console.log(dict)