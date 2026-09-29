// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 1
var a = 5, b = 6, c = 7;
var p = (a + b + c) / 2;
var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
console.log(s);                                   // Tab Console
window.alert("The area of the triangle is: " + s.toFixed(2)); // Hộp thoại
document.getElementById("kq").innerHTML = "The area of the triangle is: " + s.toFixed(2); // Giao diện web
