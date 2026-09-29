// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 17
function nhiPhanSangThapPhan(bin) {
  var kq = 0, len = bin.length;
  for (var i = 0; i < len; i++) {
    if (bin.charAt(i) === "1") kq += Math.pow(2, len - 1 - i);
  }
  return kq;
}
var bin = "11011011";
document.getElementById("kq").innerHTML = bin + "(2) => " + nhiPhanSangThapPhan(bin) + "(10)";
