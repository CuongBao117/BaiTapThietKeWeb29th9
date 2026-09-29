// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 11
function daoNguoc(n) {
  var dau = n < 0 ? -1 : 1, x = Math.abs(n), kq = 0;
  while (x > 0) {
    kq = kq * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return dau * kq;
}
var so = 654321;
document.getElementById("kq").innerHTML = so + " => " + daoNguoc(so);
