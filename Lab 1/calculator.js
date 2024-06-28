var a = parseInt(prompt("Enter First Number : "));
var b = parseInt(prompt("Enter Second Number : "));
var choice = parseInt(
  prompt(
    "Select operation: \n1: Addition \n2: Subtraction \n3: Multiplication \n4: Division"
  )
);

var result;
if (choice === 1) {
  result = a + b;
} else if (choice === 2) {
  result = a - b;
} else if (choice === 3) {
  result = a * b;
} else if (choice === 4) {
  result = a / b;
} else {
  result = "Invalid choice";
}

document.write("Result: " + result);
