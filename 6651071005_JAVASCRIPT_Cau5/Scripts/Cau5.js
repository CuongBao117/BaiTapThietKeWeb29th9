// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 5
function laNguyenTo(n) {
  if (n < 2) return false;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
var n = parseInt(window.prompt("Nhập một số nguyên dương:"));
if (isNaN(n) || n <= 0) {
  window.alert("Giá trị nhập không hợp lệ! Vui lòng nhập số nguyên dương.");
} else {
  window.alert(n + (laNguyenTo(n) ? " là số nguyên tố." : " không phải là số nguyên tố."));
}
