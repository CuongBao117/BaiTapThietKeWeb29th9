// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 18
function giaiThua(n) {
  n = Math.floor(Math.abs(n));
  var kq = 1;
  for (var i = Math.max(n, 1); i > 1; i--) kq *= i;
  return kq;
}
var n = 10;
document.getElementById("kq").innerHTML = n + "! = " + giaiThua(n);
