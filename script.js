/*Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a
  string is a palindrome string. Palnidrom means the string will read the same from left to right or right to left. 
  Example: level */

// function palindrome(string) {
//   let ans;

//   for (let index = 0; index < string.length; index++) {
//     string[index] !== string[string.length - 1 - index]
//       ? (ans = false)
//       : (ans = true);
//   }

//   return ans;
// }

// function palindrome(string) {
//   for (let i = 0; i < string.length; i++) {
//     let ans = string[i] !== string[string.length - 1 - i] ? false : true;
//     return ans;
//   }
// }

function palindrome(string, i = 0) {
  // O(n) time | O(n) space
  const j = string.length - 1 - i;
  return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}
