const path = require('path');
filename = 'C:\\temp\\myfile.html';
console.log("Basename=" + path.basename(filename));

// filename2 = 'C:\\foo.html', '.html';
// filename3 = 'C:\\foo.HTML', '.html';

// console.log("Case senesitiv=" + path.win32.basename(filename2));
// console.log("Case senesitiv=" + path.win32.basename(filename3));

// console.log(process.env.PATH);
// // Prints: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'

// process.env.PATH.split(path.delimiter);
// Returns ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']

// filename3 = '/foo/bar/baz/asdf/quux/xys';
// console.log("Directry=" + path.dirname(filename3));
// // Returns: '/foo/bar/baz/asdf'

// filename4 = 'index.';
// console.log("extname=" + path.extname(filename4));

// filename5=path.format({
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
// });
// console.log("format="+filename5)

// filename2='//server';    // true
// filename3='\\\\server';  // true
// filename4='C:/foo/..';   // true
// filename5='C:\\foo\\..'; // true
// filename6='bar\\baz';    // false
// filename7='bar/baz';     // false
// filename8 = '.';           // false

// console.log("Absolute=" + path.isAbsolute(filename2))
// console.log("Absolute=" + path.isAbsolute(filename3));
// console.log("Absolute=" + path.isAbsolute(filename4));
// console.log("Absolute=" + path.isAbsolute(filename5));
// console.log("Absolute=" + path.isAbsolute(filename6));
// console.log("Absolute=" + path.isAbsolute(filename7));
// console.log("Absolute=" + path.isAbsolute(filename8));

// filename5 = '/foo', 'bar', 'baz/asdf', 'quux', '..';
// console.log("Path="+path.join(filename5))

// filename7 = 'C:\\temp\\\\foo\\bar\\..\\';
// console.log("Normalize=" + path.normalize(filename7));

// filename8 = 'C:\\orandea\\test\\aaa", "C:\\orandea\\impl\\bbb';
// console.log("Relative=" + path.relative(filename8));/////////////error

// filename9 = "/foo/bar", "./baz";
// console.log("Resolve=" + path.resolve(filename9));

