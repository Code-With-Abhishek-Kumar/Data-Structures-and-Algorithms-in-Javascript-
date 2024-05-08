### What is Array


- JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.

- JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.



### Find the Length of an Array
- The length property returns the length (size) of an array
```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size)

```

### JavaScript Array toString()

```javascript
// Converting an Array to a String
let arr = ["Apple" , "Banana" , "Cherry"]
console.log( arr.toString()) // Return Apple,Banana,Cherry

```


# JavaScript reverse()  method 

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