const fs = require("fs");
fs.writeFile("First.js", "This is Demo file", () => {
  console.log("File Write Succes");
});

fs.appendFile("First.js", "Append File", (err, data) => {
  console.log("appendFile" + "Append Succes");
});

fs.readFile("First.js", (err, data) => {
  console.log(data);
});

// fs.readFile("fsDemo.js", (err, data) => {
//   console.log(data.toString());
// });

fs.stat("First.js", (err, data) => {
  console.log("data=" + data);
});

fs.exists("First.js", (data) => {
  console.log("Exists=" + data);
});
