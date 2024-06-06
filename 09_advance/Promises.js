/***********Method - 1 to define the Promises    - containing a variable of promises*/  


const promisesOne = new Promise(function(reslove , reject){
    //Do aycsn task
    //DB call , cryptogarphy network

    setTimeout(function(){
        console.log("Async Function is called .............!")
        reslove();      //this for connect the promises to the .then or catch() methods
    },1000)
})


///this run to show the promies is complete or not 
promisesOne.then(function(reslove){
    console.log("Async Completed ........")
})


/***********************Method - 2 to define the Promises --- without Variable *******/

new Promise(function(reslove , reject){
    setTimeout(function(){
        console.log("Async Task - 2 called  ....!")
        reslove();  //IMP
    }, 1000)
}).then(function(){
    console.log("Asycn Task -2 completed ....!")
})

/**********passing the object to the resolve method  ************************/

const promiseTwo = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({userName : "Ganesh" , password : "123"});
    }, 1000)
})

promiseTwo.then(function(user){
    console.log( "Object Form the Promise :- ", user)
})//access the value form the object 
promiseTwo.then(function(user){
    console.log(user.userName)
})


/**********here use the {.then , .catch,  .finally} */

const promiseFour = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            reslove({userName: "GaneshSalgar" , Email : "ganeshsalgar2002@gmail.com"})
        }
        else{
            reject("Error : 404 Something Went Wrong ....!")
        }
    }, 1000)
})
promiseFour.then(function(user){
    console.log(user)
    return user.userName
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
})
promiseFour.finally(() => console.log("The promise is either resolved or rejected"))


/*************** Haddle the Error  BY the {Asycn and Await Methods} and try catch method tom promise********************* */

const promiseFive = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            reslove({userName: "Mahesh Salgar" , Email :"ganesh@google.com"})
        }
        else{
            reject("Error : 404 ")
        }
    } , 1000)
})

// async function comsumeFivePromis(){
//     try {
//         const responce = await promiseFive   //await is IMP (it is wait for resolve or reject the promise)
//         console.log(responce);
//     } catch (error) {
//         console.log(error)
//     }
// }  
// comsumeFivePromis();


/*********** using the fetch() into the async promise ******************/

async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')   //get is json form the ecternal file 

        const data = await response.json()   //change the responce to the json 
        console.log(data);
        
    } catch (error) {
        console.log("here is Error")
    }
}
getAllUser()



/******************** fetch()  is used into directly the {.then() , .catch() } *************/

fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json()
})
.then(function(data){{
    console.log(data);
}})
.catch(function(){
    console.log("ERROR IS FOUND >>>!")
})


// this is print the first on the json and then the print all the code check the output