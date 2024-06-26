// Array - Decalaration

console.log("Q:- Array - Decalaration")
let arr = ["Apple" , "Banana" , "Cherry"]
console.log(arr)
console.log(arr[0])  // Array index Starts With 0 
console.log(arr[1])


console.log("Q:- Access the Full Array")
// Access the Full Array
console.log( "Ans :- Access the Full Array:- " + " " + arr) //3


console.log("Q:- Find the Length of an Array")
// Find the Length of an Array
console.log( "Ans :- Find the Length of an Array using .length :- " + " " + arr.length) //3

console.log("Q:- Converting an Array to a String")
// Converting an Array to a String
console.log( "Ans :- toString() converts an array to a string of (comma separated) array values. :- " + " " + arr.toString()) 




console.log("##********** Array Methods **********##");

// Arrays - Add and Remove Element
console.log("Q:- Removing the last element of an array")
console.log(arr)
console.log( "Ans :- pop() method  removes the last element from an array and returns that element :-" + " " + arr.pop()) // [ 'Apple', 'Banana' ]
console.log(arr)
console.log("Q:-add the specified elements to the end of an array")
console.log( "Ans :- The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array. :-" + " " + arr.push("Cherry")) // [ 'Apple', 'Banana', 'Cherry' ]
console.log(arr)

console.log("Q:- removes the specified elements to the first of an array")
// 
console.log( "Ans :- The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array. :-" + " " + arr.shift()) // [ '', 'Banana', 'Cherry' ]
console.log(arr)

console.log("Q:- add the specified elements to the beginning of an array")
// 
console.log( "Ans :- The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array. :-" + " " + arr.unshift("lemon" , "kiwi")) // [ '', 'Banana', 'Cherry' ]
console.log(arr)