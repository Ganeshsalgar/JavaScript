/**************create a singleton Object *************/
    //const tinderUser = new Object()    using a () to create singleton object
    
/************ create a Non- Singleton Object *********/

    const tinderUser = {};

/**********push the values into the Objects **********/
    tinderUser.id = "123abc"
    tinderUser.name = "Ganesh";
    tinderUser.isLoggedIn = false    

    console.log(tinderUser)

/******************neasted Objects (objects under the Objects) ********************/

    const regularUser = {
        userName : {                    //object  under
            fullName :{                 //object 
                firstName : "Ganesh",
                LastName : "Salgar",
            }
        }
    }
    

    /**   access it object  */
    console.log(regularUser.userName.fullName.firstName)

/*****************Join two Objects into the single object ********/

    const obj1 = {1 : "a" , 2 : "b"}
    const obj2 = {3 : "c" , 4 : "d"}
    const obj3 = {5 : "f" , 6 : "h"}

    const obj4 = Object.assign({} , obj1 , obj2, obj3)    //the assign method is having a (target , sources)

    console.log(obj4);  //this is print all objects 

/*********************another way to combine the objects  *********************/

    const obj5 = {...obj1 , ...obj2}
    
    console.log(obj5)
/******************* To check the have property  *********************/

    console.log(tinderUser.hasOwnProperty("isLoggedIn"))

/********************** Object Mehtods  *************/ 
    console.log(tinderUser)

    console.log("Only Keys :- ",Object.keys(tinderUser))    // to list down the all keys 
    console.log("Only values :- ",Object.values(tinderUser))   // to list down the all values 
    console.log("Enteries all key: value pair",Object.entries(tinderUser))   // it can print the all key: value pair of the object 



