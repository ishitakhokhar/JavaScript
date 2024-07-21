var n = parseInt(prompt("Enter number : "));
var sum = 0;
var temp = n;
while (n != 0) {
  var r = n % 10;
  sum = sum * 10 + r;
  n = Math.floor(n / 10);
}
if (temp == sum) {
  document.write("Number is palindrome");
} else {
  document.write("Number is not palindrome");
}
