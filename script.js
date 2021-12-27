/*Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a
  string is a palindrome string. Palnidrom means the string will read the same from left to right or right to left. 
  Example: level */

function palindrome(string) {
  let ans;

  for (let index = 0; index < string.length; index++) {
    string[index] !== string[string.length - 1 - index]
      ? (ans = false)
      : (ans = true);
  }

  return ans;
}
