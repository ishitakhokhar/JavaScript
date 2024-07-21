const child_process = require("child_process");
child_process.exec("dir", (err, stdout, stdin) => {
  console.log(stdout);
});

// child_process.execFile("dir", ["--v16.4.0.v14.18.0"], (err, stdout, stderr) => {
//   if (err) {
//     throw err;
//   }
//   console.log(stdout);
// });
