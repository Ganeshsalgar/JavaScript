//Dates 

// Note :- Date is the Date type of is = Object 


let myDate = new Date();
console.log(myDate.toString());  //print the readable format
console.log(myDate.toDateString())  //print Only the Date and Day

console.log(myDate.toLocaleString())  //Gives the Date and the time
console.log("Print the Data Type of the Date : - ", typeof myDate)


let myCreatedDate = new Date(2023 , 0 , 14);
console.log(myCreatedDate.toString())   //print the created Date 


let myCreatedDate01 = new Date(2023 , 0 , 14 ,  5, 3);
console.log(myCreatedDate01.toString())   //print the created Date 


let myCreatedDate02 = new Date("2023-01-14")
console.log(myCreatedDate02.toString())



// ************* time*******************

let myTimeStamp = Date.now();

console.log(myTimeStamp);   // calculate the time stamp of the till date

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));



// *************************** Methods *************************
// ${newDate.getDay()} and the time


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// format to what you want to define in the funtion

newDate.toLocaleString('default', {
    weekday: "long",
    day:"numeric",
    calendar: "year"
})