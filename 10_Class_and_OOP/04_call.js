function setUserName(UserName) {
    this.UserName = UserName
    console.log("called Function")

}

function createUser (UserName , Email, Password){
    /***Function is passing another function into the cuurent Excution Context *************/

    //use call and this
    //call = call is hold the refernce to the context after the function is excuted
    // this = because of this we can store the refernece get by the call
    
    setUserName.call(this ,UserName)
    
    this.Email = Email,
    this.Password = Password
}


const chai = new createUser("Ganesh" , "ganesh@google.com" , "123")

console.log(chai)