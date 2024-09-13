// Q 1 ;- Palindrome Number

// An Integer is a palindrome When it reads the same forward and backward.

// Input x = 121 ----->>>>>  Output : true
// Input x = 10 ----->>>>>  Output : false


/**
 * Function to check if a number is a palindrome.
 * A number is considered a palindrome if it reads the same forwards and backwards.
 * 
 * @param {number} x - The number to check.
 * @return {boolean} - Returns true if the number is a palindrome, false otherwise.
 */


const isPalindrome = function(x) {
    console.log("The value of x is:", x);

    /* -------------------------------------------------------------------------- */
    /*                        Convert number to a string                           */
    /* -------------------------------------------------------------------------- */
    // Convert the number to a string to easily manipulate and check its characters.
    let numToStr = x.toString();
    console.log('Check the type of x:', typeof(numToStr)); // Verifies the number is converted to a string or not

    /* -------------------------------------------------------------------------- */
    /*                     Check if the string reads the same backwards          */
    /* -------------------------------------------------------------------------- */
    
    // 1. Split the string into an array of characters.
    // Example: "121" => ['1', '2', '1']
    let charArray = numToStr.split('');
    console.log('Array after split:', charArray);

    // 2. Reverse the array of characters.
    // Example: ['1', '2', '1'] => ['1', '2', '1']
    // Note: Reversing doesn't change the array for palindromes.
    let reversedArray = charArray.reverse();
    console.log('Array after reverse:', reversedArray);

    // 3. Join the reversed array back into a string.
    // Example: ['1', '2', '1'] => "121"
    let reversedStr = reversedArray.join('');
    console.log('Reversed string:', reversedStr);

    // Compare the original string with the reversed string.
    // If they are the same, then the number is a palindrome.
    if(numToStr === reversedStr){
     
        console.warn('yes this number is a palindrome')     // warn is console  
        return numToStr === reversedStr;  //   return tue if number is  palindrome
    } else {

        console.warn('no this number is not a palindrome number')     // warn is console  
        return numToStr === reversedStr;  //   return tue if number is  palindrome
      
    }

}

// Test cases
console.log(isPalindrome(121));  // Output: true
console.log(isPalindrome(10));   // Output: false
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(-121)); // Output: false (negative numbers are not considered palindromes)
