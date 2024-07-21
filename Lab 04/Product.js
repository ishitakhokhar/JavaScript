let product = [
  {
    Name: "Maggi",
    price: 10,
    netweight: 25,
  },
  {
    Name: "Chocolet",
    price: 2,
    netweight: 0.5,
  },
  {
    Name: "Cake",
    price: 600,
    netweight: 150,
  },
  {
    Name: "Waffers",
    price: 10,
    netweight: 60,
  },
];
for (var i = 0; i < product.length; i++) {
  document.write(product[i].Name + "<br>");
  document.write(product[i].price + "<br>");
  document.write(product[i].netweight + "<br>");
}
