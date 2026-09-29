// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 8
var chuSo = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
var n = parseInt(window.prompt("Nhập số nguyên có 2 chữ số (10 - 99):"));
if (isNaN(n) || n < 10 || n > 99) {
  window.alert("Vui lòng nhập số nguyên có 2 chữ số!");
} else {
  var chuc = Math.floor(n / 10), donvi = n % 10, kq;
  if (chuc === 1) {
    kq = "mười";
    if (donvi === 5) kq += " lăm";
    else if (donvi !== 0) kq += " " + chuSo[donvi];
  } else {
    kq = chuSo[chuc] + " mươi";
    if (donvi === 1) kq += " mốt";
    else if (donvi === 5) kq += " lăm";
    else if (donvi === 4) kq += " tư";
    else if (donvi !== 0) kq += " " + chuSo[donvi];
  }
  window.alert(n + " đọc là: " + kq);
}
