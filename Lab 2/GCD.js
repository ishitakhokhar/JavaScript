// WAP in JavaScript to print the GCD of two number.
function gcd(num1, num2) {
  while (num2 != 0) {
    var temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}
var num1 = parseInt(prompt("Enter first number : "));
var num2 = parseInt(prompt("Enter second number : "));
console.log(
  "The GCD of num1 " + num1 + " and " + num2 + " is : " + gcd(num1, num2)
);
