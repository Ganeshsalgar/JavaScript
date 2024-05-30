const user = {                       //object
    username : "hitesh",
    price: 999,

    welcomemessage : function (){
        /************using (this) keyword *********************/
        console.log(`${this.username} , welcome to our website......!`)

        console.log(this)     //gives a current context
    }
}
user.welcomemessage()        // print the current username

user.username = "Ganesh"     //change the username

user.welcomemessage()        // print new updated username into the object



/********************this into the Node.js ********************/
console.log("This into the Node.js")
console.log(this)           // this is gives a output that is (empty object)



/***********************(this)  into the window  ***************/

//  when we run on the browser that is gives a (window object)


/********************** (this) used into the functions **************/

function chai() {
    username: "Ganesh"
    console.log(this.username)
}
chai()          //(this) is not working into the function it gives otuput (undefined)


const one = () =>{
    username : "ganesh",
    console.log(this)
}
one()          //(this) is gives a empty object