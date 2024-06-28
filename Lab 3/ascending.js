// WAP to read an array from the user and sort them in ascending order.

let arr = new Array();
var num = parseInt(prompt("Enter size of element : "));
for (var i = 0; i < num; i++) {
  arr[i] = prompt("Enter array element : ");
}
for (var i = 1; i < num; i++) {
  for (var j = 1; j < num; j++) {
    if (arr[i] > arr[j]) {
      var temp = arr[i];
      arr[j] = arr[i];
      arr[j] = temp;
    }
  }
  document.write(arr);
}
