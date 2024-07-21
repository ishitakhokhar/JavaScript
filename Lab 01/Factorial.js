var n = parseInt(prompt("Enter number : "));
var fact = 1;
var i = 1;
while (i <= n) {
  fact *= i;
  i++;
}
document.write("Factorial of " + n + " is : " + fact);
