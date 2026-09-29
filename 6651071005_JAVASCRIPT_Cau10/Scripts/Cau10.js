// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 10
var n = parseInt(window.prompt("Nhập số nguyên dương n:"));
if (isNaN(n) || n <= 0) {
  window.alert("Giá trị nhập không hợp lệ!");
} else {
  var tong = 0, x = n;
  while (x > 0) {
    tong += x;
    x = Math.floor(x / 2); // chia lấy phần nguyên
  }
  window.alert("Tổng n + n/2 + n/4 + ... với n = " + n + " là: " + tong);
}
