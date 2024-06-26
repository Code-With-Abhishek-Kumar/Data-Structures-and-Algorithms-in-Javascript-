

<!-- TOC -->

- [What is Array](#what-is-array)
    - [JavaScript Array push](#javascript-array-push)
    - [JavaScript Array pop](#javascript-array-pop)
    - [Find the Length of an Array](#find-the-length-of-an-array)
    - [JavaScript Array toString](#javascript-array-tostring)
    - [JavaScript reverse  method](#javascript-reverse--method)
    - [JavaScript Array indexOf Method](#javascript-array-indexof-method)
    - [JavaScript Array lastIndexOf Method](#javascript-array-lastindexof-method)

<!-- /TOC -->



## What is Array


- JavaScript arrays are resizable and can contain a mix of different data types. When those characteristics are undesirable, use typed arrays instead.

- JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.






### JavaScript Array push()

- The push() method in JavaScript is used to add one or more elements to the end of an array and returns the new length of the array after the elements have been added. 




````javascript
let newLength = array.push(element1, element2, ...);

````

- push() method ek ya ek se zyada elements ko array ke end mein add karta hai  aur array ka naya length return karta hai.

- push() ka use tab kiya jata hai jab aapko array ke end mein elements add karna ho aur aapko naye array ka length bhi track karna ho.

````javascript

  let arr = [1, 2, 3];
let newLength = arr.push(4); // arr is now [1, 2, 3, 4], newLength is 4


````






### JavaScript Array pop()


- The pop() method removes (pops) the last element of an array. The pop() method changes the original array. It reduces the array’s length by one and returns the removed element. If the array is empty, `pop()` returns undefined, ensuring no errors occur.


- pop() method array se last element ko remove karke return karta hai. or agr array empty hain toh ye undefined return kr dega.

````javascript
arr.pop();

````

- pop() ka use tab kiya jata hai jab aapko array se last element ko remove aur retrieve karna ho.





### Find the Length of an Array

- The length property returns the length (size) of an array



```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size) // Return 4

```

### JavaScript Array toString()

The toString() method is  used to convert the given object to its corresponding string representation. toString in javascript can be used with numbers, strings, arrays, and objects.



```javascript
// Converting an Array to a String
let arr = ["Apple" , "Banana" , "Cherry"]
console.log( arr.toString()) // Return Apple,Banana,Cherry

```


### JavaScript reverse()  method 

````javascript
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]


````


### JavaScript Array indexOf() Method


````javascript
array.indexOf(searchElement[, fromIndex])
````


`Parameters`




- `searchElement:` The element to search for within the array.


- `fromIndex (optional):` The index to start the search from. If not specified, the search starts from index 0.




`Description`

The indexOf() method is used to find the index of an element in an array. If the element is found, it returns the index of the first occurrence of the element in the array. If the element is not found, it returns -1.

- The search for the element starts from the beginning of the array (left to right).

- You can optionally specify a fromIndex parameter to start searching from a specific index in the array.

`"First occurrence" explanation"`


- "First occurrence" ka matlab hota hai kisi array ya string mein kisi element ya value ka sabse pehla ya prarambhik sthiti ya position. Jab hum JavaScript mein indexOf() method ka istemal karte hain, hum ek element ya value ki pehli baar ki sthiti ya position ko dhoondhte hain. Yeh search left to right direction mein hota hai, matlab ki array ke shuruvat se element ko dhoondha jaata hai or end pe ja k ruk jata hain.






`````javascript

// Example with string array
let fruits = ['apple', 'banana', 'orange', 'apple', 'pear'];
console.log(fruits.indexOf('apple'));  // Output: 0
console.log(fruits.indexOf('pear'));   // Output: 4
console.log(fruits.indexOf('grape'));  // Output: -1 (element not found)

// Example with number array
let numbers = [3, 6, 2, 5, 2, 8, 2];
console.log(numbers.indexOf(2));       // Output: 2
console.log(numbers.indexOf(8));       // Output: 5
console.log(numbers.indexOf(10));      // Output: -1 (element not found)

// Example with string
let sentence = 'Hello, world!';
console.log(sentence.indexOf('o'));    // Output: 4
console.log(sentence.indexOf('l'));    // Output: 2
console.log(sentence.indexOf('z'));    // Output: -1 (character not found)




`````









### JavaScript Array lastIndexOf() Method

- The lastIndexOf() method in JavaScript is used to find the last occurrence of a specified element within an array. It searches the array from right to left (from the end towards the beginning).

- f the element is not found in the array, lastIndexOf() returns -1.


- Last occurrence" ka matlab hota hai ki kisi element ya value ka antim (आखिरी) sthiti ya position. Jab bhi hum lastIndexOf() method ka istemal karte hain, hum ek array mein kisi element ya value ka antim occurrence dhundhte hain, yaani uska sabse last position ya index pata lagate hain.

`Key Points:`

Definition: lastIndexOf() method ek array mein ek specific element ya value ka antim (आखिरी) sthiti ya position dhoondhne ke liye istemal hota hai.

Operation: Yeh method array ko right to left (दाएं से बाएं) search karta hai, matlab ki wo array ke last index se element ko find karna shuru karta hai aur first index tak find karta hai.

Return Value: Agar element array mein mil jaata hai, to wo us element ka last index return karta hai. Agar element array mein nahi hota hai, to -1 return hota hai.

Use Case: lastIndexOf() ka upyog tab kiya jaata hai jab aapko array mein se ek element ka last index retrieve karna ho.


`Example:`


````javascript

let numbers = [2, 5, 9, 2];
console.log(numbers.lastIndexOf(2)); // Output: 3

let fruits = ['apple', 'banana', 'orange', 'apple', 'pear'];
console.log(fruits.lastIndexOf('apple')); // Output: 3

console.log(fruits.lastIndexOf('grape')); // Output: -1



````


- In examples mein, lastIndexOf() method numbers array mein 2 ka antim occurrence index 3 par hai. Aur fruits array mein 'apple' ka antim occurrence index 3 par hai. Jab ki 'grape' array mein nahi hai, isliye -1 return hota hai.







