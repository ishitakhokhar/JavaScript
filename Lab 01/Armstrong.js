var n = parseInt(prompt("Enter number : "));
var sum = 0;
var count = 0;
var originalNumber = n;
while (n > 0) {
  var r = n % 10;
  count++;
  sum = sum + Math.pow(r, count);
  n = Math.floor(n / 10);
}
if (sum == originalNumber) {
  document.write("Number is armstrong");
} else {
  document.write("Number is not armstrong");
}
