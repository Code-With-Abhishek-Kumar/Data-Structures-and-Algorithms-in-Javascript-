# Q. Write a program that swaps two variables without using a third variable.

`Solve This`
```js

let a = value1; // Assign initial value to a
let b = value2; // Assign initial value to b

// Swap the values
a = a + b; // Step 1: Add both values and store in a
b = a - b; // Step 2: Subtract the new value of a from b
a = a - b; // Step 3: Subtract the new value of b from a


a = a * b; // Step 4: Multiply both values and store in a
b = a / b; // Step 5: Divide the new value of a by b, which gives the original a
a = a / b; // Step 6: Divide the new value of a by the new value of b, which gives the original b


a = a ^ b; // Step 7: XOR both values and store in a
b = a ^ b; // Step 8: XOR the new value of a with b to get the original a
a = a ^ b; // Step 9: XOR the new value of a with the new value of b to get the original b


// Now, a and b are swapped

```