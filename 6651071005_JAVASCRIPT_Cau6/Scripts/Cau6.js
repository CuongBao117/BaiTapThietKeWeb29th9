// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 6
var a = parseFloat(window.prompt("Nhập hệ số a:"));
var b = parseFloat(window.prompt("Nhập hệ số b:"));
var c = parseFloat(window.prompt("Nhập hệ số c:"));
var kq;
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  kq = "Hệ số nhập không hợp lệ!";
} else if (a === 0) {
  if (b === 0) {
    kq = (c === 0) ? "Phương trình vô số nghiệm." : "Phương trình vô nghiệm.";
  } else {
    kq = "Phương trình bậc nhất, nghiệm x = " + (-c / b);
  }
} else {
  var delta = b * b - 4 * a * c;
  if (delta < 0) {
    kq = "Phương trình vô nghiệm.";
  } else if (delta === 0) {
    kq = "Phương trình có nghiệm kép x1 = x2 = " + (-b / (2 * a));
  } else {
    var x1 = (-b + Math.sqrt(delta)) / (2 * a);
    var x2 = (-b - Math.sqrt(delta)) / (2 * a);
    kq = "Phương trình có 2 nghiệm phân biệt:\nx1 = " + x1 + "\nx2 = " + x2;
  }
}
window.alert(kq);
