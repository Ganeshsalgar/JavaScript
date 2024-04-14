const marvel_heros = ["thor", "IronMan", "SpiderMan"]
const dc_heros = ["superman" , "flash", "batman"]

marvel_heros.push(dc_heros)  // because  of this array push the second array completely

console.log(marvel_heros)

// *************** access the element by **************
console.log(marvel_heros[3][1]);

// it same as the vector it will print the :- flash

//************ concat   *****************/

const all_heros = marvel_heros.concat(dc_heros)

console.log(all_heros);

// *******************  another way to add two array element **************

const all_new = [...marvel_heros , ...dc_heros]
//like wise you can add the infinite array elements into single array
console.log(all_new)


/***************array having infinite array into it ****************/
/*************flat method ***************/
const another_array = [1,2,3[4,5,6],7,8,[7,79,3[5,7,[11]]]]



const real_another_array = another_array.flat(Infinity)
// this is print the all deaph array 
console.log(real_another_array);



/***********another methods *********/

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));