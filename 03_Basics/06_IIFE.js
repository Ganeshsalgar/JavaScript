// (IIFE) Immediately Invoked Function Expressions 


//Syntax :- 
(function () {
    console.log("Hallo World")
})();

// always write the ; for ending function its IMP 


/****************write a two IIFE functions in one file *****************/

(function(){
    console.log("Hallo World ...........!")
})();   // ----> using of this [;] that is close the funtion and then run the next funtion so it is very imp

(function() {
    console.log("Welcome to our Website>>>>>>>>>>>>!")
})();


/*****************IIFE funtion with parameter **************************/

(function(message){
    console.log(message);
})("Ganesh Salgar"); //---> arguments are pass into this (); paranthesis 