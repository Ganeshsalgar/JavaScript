function multiplayBy5(nums){
    return nums*5
}

multiplayBy5.power = 3

console.log(multiplayBy5(5));
console.log(multiplayBy5.power);
console.log(multiplayBy5.prototype);

function createUser(username , score){
    this.username = username
    this.score = score
}



/************ Creating a new Prototype  method  **********************/
createUser.prototype.incerment  = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}


/********use fo {new} keyword  ***************************/
const chai  =  new createUser("chai" , 25)   // this used here (new)  keyword and that is for Importance of the new keyword that is {this is attached the method into the prototype}
const tea =  new createUser("tea" , 250)



chai.printMe();
chai.incerment()
chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

