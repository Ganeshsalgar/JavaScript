/************ arrow functions ***************************************/

const one = () =>{
    console.log("Arrow function")
}
one();


/*********************arrow function with the parameter **********************/
const addTwo1 = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo1(5,5))

/********************* implicit functions **************************************/

// imp :- here no need to (return) function


const addTwo2 = (num1, num2) =>  num1 + num2

const addTwo3 = (num1, num2) => ( num1 + num2 )


/****************************arrow function with the Object as implicitely *********************** */
const addTwo = (num1, num2) => ({username: "hitesh"})          //imp the object is ({})


console.log(addTwo(3, 4))