// Hoisting is the concept that which the funtions can be declare into the many ways and this funtions can be access into the multiple ways so this funtion will run or not that is depend on the funtions declaration this is called the hoisting 


console.log( "Before :- " , addone(3));  //before the funtions declararion we can access the funtion also access it.

function addone(num) {
    return num + 1;
}

console.log("After :- ",addone(3));  //after the funtions declararion we can access the funtion

/***********************Another type of declaration  ***********************************************************/

// console.log( "Before :- ", addTwo(2))   //this type of declaration is not access the funtion before declare it 

const addTwo = function(num){        
    return num + 2;
}

console.log("After :- " ,addTwo(4))           // it can access the function after declaration
