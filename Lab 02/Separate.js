// Write a JavaScript to take 2-digit number and then separate these 2 digits, then multiply
//  ƒrst digit by itself for second digit times.
// (For example, 23 should be separated as 2 and 3. 2 should multiply with itself 3 times).
function multiply(num) {
  if (num < 10 || num > 99) {
    console.log("Please enter valid number");
    return;
  }
  var firstDigit = Math.floor(num / 10);
  var secondDigit = num % 10;
  var result = 1;
  for (var i = 0; i < secondDigit; i++) {
    result *= firstDigit;
  }
  return result;
}
var num = parseInt(prompt("Enter two digit number : "));
var output = multiply(num);

console.log(output);
