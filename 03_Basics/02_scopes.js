//  var  :- var is having a global scope in the program 

// let  :- let is having a Block scope into the program

// const :- const is also having a Block scope 

if (true){
    var a = 10;
    let b = 20;
    const c = 30;

    console.log("INNER :-")
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log( "OUTTER :-");
console.log(a);
// console.log(b);              //Not Run because of the Block scope
// console.log(c);                 //Not Run because of the Block scope