// ******** Declaration***********


let myArray = [0,1,2,3,4,5]
console.log("A :-",myArray)

// ********another way to Decleration******

let myN1 = new Array(0,1,2,3,4)

console.log(myN1)

// ******** Method of Array**********

// push
myArray.push(6)
myArray.push(7)
myArray.push(8)

console.log("B :-",myArray)

// pop

myArray.pop();
myArray.pop()
myArray.pop();

console.log("C :-",myArray)

//unshift   - add or remove the element at first of the array

myArray.unshift(9);
myArray.unshift(10);

console.log("D :-",myArray);

//shift   - remove the first element

myArray.shift();
myArray.shift();

console.log("E :-",myArray);

//slice  -- Gives the subarray (without include the last given index)

console.log(myArray.slice(1,4));

console.log("F :-",myArray);

// VVIMP splice  -- Add or remove the element form the Original array

console.log(myArray.splice(1,4))


console.log("G :-",myArray);
