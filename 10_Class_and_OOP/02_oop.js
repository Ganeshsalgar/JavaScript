const user = {
    username : "Ganesh",
    loginCount : 8, 
    signedIn : true,


    getUserDetails: function(){
        console.log("Got User details SuccessFully form the DateBase");
        console.log(`UserName : ${this.username}`)  //this is indicate the current Instances for this Oject 

        console.log( "Print the Object :- " ,this);
    }
}

console.log(user.username);

console.log(user.getUserDetails())

console.log(this)  // Here this is give the {} empty Object not containing any value here 

/********** into the Browser *********** */
// console.log(this)  // Here this is give the all the Windows Properties and prototypes because the Brawser is containing various propertiese and  API , DOM ,Network , Fetch() etc...




/******************Cretaing   Function and Objects Instances ********************* */
function myUser(UserName , logInCount , isSingIn){
    this.UserName = UserName
    this.logInCount = logInCount
    this.isSingIn = isSingIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const UserOne = new myUser("Ganesh", 3 , true);  // Creating a New Object Instance

console.log(UserOne)  //this is store the value into the function myUser


const UserTwo = new myUser ("Mahesh" ,90 , false)   // Creating a New Object Instance

console.log(UserTwo)