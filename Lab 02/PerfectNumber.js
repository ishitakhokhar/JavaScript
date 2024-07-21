var a = parseInt(prompt("enter number : "));
var sum = 0;
for (var i = 0; i < a; i++) {
  if (a % i == 0) {
    sum = sum + i;
  }
}
if (a == sum) {
  document.write("is perfect");
} else {
  document.write("Number is not perfect");
}
