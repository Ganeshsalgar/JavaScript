const myName = "Ganesh      "
const name = "Hitesh     "


//Method is a not exist into the prototype

// console.log(myName.trueLenght())


/********** array *************/

let myHero = ["spyderman" , 'thor']

/****************Object   ***********************/

let heropower  = {
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower :  function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

/***************** IMP diagram *********************************** */

// function ------------>
//  Array   ------------>           Object   -------------> null
// String   ------------>


/******************create a prototype for the Object  ***************/
Object.prototype.ganesh = function(){
        console.log(`ganesh is present into the all Objects ...........`)
}


/*************** creating a prototype for thea array *************** */

Array.prototype.heyGanesh = function(){
    console.log(`Ganesh Says Hello`)
}

/********* check the prototypes *******/

heropower.ganesh()   // object

myHero.ganesh();  // array


// heropower.heyGanesh() // object   not possiable
 
myHero.heyGanesh()  /// array



//inheritance 

const user ={
    name: "Ganesh",
    email: "ganesh@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport ={
    makeAssignment :"JS Assignment",
    fullTime: true,
    

    /******** method to connect another prototype  is inheritance ****/

    __proto__: TeachingSupport
}

/*********method to inherit prototype form the another object ******/

Teacher.__proto__ = user


/*********** Modern Syntax **************** */

Object.setPrototypeOf(TeachingSupport, Teacher)




/*********  create a starting method of prtotype */

let userName = "chaiaurcode                 "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`);
}

userName.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()