// De-Stucturing of The Objects

/***********create a object  ***********/
    const course = {
        FirstName : "Ganesh",
        LastName : "Salgar",
        age : 20
    }

    console.log("Print Name without De-stucturing :- ",course.FirstName)
    // access the element needs the . elements


    /****de-sturturing  ***********/ 
    const {FirstName : fName , LastName : LName , age : Perage} = course   // this is the de-stucturing  not need the . to access the element
    
    console.log("after the De-stucturing :-")
    console.log(fName)
    console.log(LName)
    console.log(Perage)


/************************************************* JSON  *************************************************/
    // this is the JSON Object Syntax :-
{
    Name : "Ganesh"
    LastName : "Salgar"
    Age : 20
}


/*******************JSON Object Array  ********************/

// [                            array
//     {                        object
//         ...
//     }

//     {                         object
//         ...
//     }
    
//     {                         object
//         ...
//     }
// ]