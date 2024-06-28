// WAP to read an array from the user and sort them using bubble sort.
let arr = new Array();
var num = parseInt(prompt("Enter element size : "));
for (var i = 0; i < num; i++) {
  arr[i] = prompt("Enter array element : ");
}
for (var i = 0; i < num - 1; i++) {
  for (var j = 0; j < num - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      var temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
}
document.write(arr);
