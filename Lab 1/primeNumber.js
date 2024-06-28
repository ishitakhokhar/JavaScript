var n = parseInt(prompt("Enter number : "));
var count = 0;
for (var i = 2; i < n; i++) {
  if (n % i == 0) {
    count++;
  }
}
if (count == 0) {
  document.write("Number is prime");
} else {
  document.write("Number is not prime");
}
