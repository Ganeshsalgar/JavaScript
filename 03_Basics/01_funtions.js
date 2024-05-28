/***********create a functions ***************/

function addTwoNumbers(Num1 , Num2){
    console.log(Num1 + Num2)
}

addTwoNumbers(3, 5);

// But this functions is not return anything so it cannot store into any third variable

/**************create  a funtions ************************/

function addTwoNumbers1 (num1 , num2){
    return num1 + num2;
}

const result = addTwoNumbers1(5, 5)   //to store the value of functions  needs the return to function 
console.log("Result :- ",result)



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));