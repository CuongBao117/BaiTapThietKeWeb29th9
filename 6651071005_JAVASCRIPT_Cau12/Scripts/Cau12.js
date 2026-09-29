// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 12
function luyThua(b, n) {
  var kq = 1;
  for (var i = 1; i <= n; i++) kq *= b;
  return kq;
}
var b = 2, n = 10;
document.getElementById("kq").innerHTML = b + "^" + n + " = " + luyThua(b, n);
