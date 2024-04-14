// SingleTon
// Object.Create

// Object literals

/********* Crate a Symbol ************/

const mySym = Symbol("key1")

/************Create a Object **********/

const JsUser ={
    name: "Ganesh",    // key : value    // key is String here {name}
    age : 18,
    location : "Pune",
    email: "ganesh@google.com",
    isLoggedIn : false,
    lastLoggedInDays :["Monday" , "Saturday"],

    "Full name" : "Ganesh Salgar",     //key : value  -keys is string{full name}
    //both declearation is same 

    /*******declearation and using [symbol] into the Objcet*****/
    [mySym] : "mykey1",
    
}

/***********access the element of the Object method-1 **************/
console.log(JsUser.email)

/***********access the element of the Object method-2 **************/
console.log(JsUser["email"])

console.log(JsUser["Full name"])   // for this type of declearation for the Object is complasary

/************change the Object */
JsUser.email = "ganesh@microsoft.com"

console.log(JsUser.email)
/************Freez the object for the change  *********/
Object.freeze(JsUser.email)
// email can not be change 

JsUser.email = "ganesh@chatgpt.com"
console.log(JsUser.email);

/********used Greeting into the Js */

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());