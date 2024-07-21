var num = parseInt(prompt("Enter First number : "));
var num2 = parseInt(prompt("Enter second number : "));
for (var i = num + 1; i < num2; i++) {
  var count = 0;
  for (var j = 2; j < i; j++) {
    if (i % j == 0) {
      count++;
    }
  }
  if (count == 0) {
    document.write(i);
  }
}
