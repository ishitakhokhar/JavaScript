a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a.push(6);
document.write("push=" + a + "<br>");

a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a1.pop();
document.write("pop=" + a1 + "<br>");

a2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a2.shift();
document.write("shift=" + a2 + "<br>");

a3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a3.unshift(5);
document.write("unshift=" + a3 + "<br>");

a4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
d = a4.slice(2, 6);
document.write("slice=" + d + "<br>");

a5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
b = a5.splice(3, 2);
document.write("splice=" + b + "<br>");
