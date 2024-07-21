var n = parseInt(prompt("Enter number : "));
var n1 = 0;
var n2 = 1;
var n3;

document.write(n1 + " ");
document.write(n2 + " ");

for (var i = 2; i < n; i++) {
  n3 = n1 + n2;
  document.write(n3 + " ");
  n1 = n2;
  n2 = n3;
}
