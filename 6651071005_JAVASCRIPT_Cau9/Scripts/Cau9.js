// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 9
function vietHoaDauTu(s) {
  var tu = s.split(" ");
  for (var i = 0; i < tu.length; i++) {
    if (tu[i].length > 0) {
      tu[i] = tu[i].charAt(0).toUpperCase() + tu[i].substring(1);
    }
  }
  return tu.join(" ");
}
var chuoi = "need not to know";
document.getElementById("kq").innerHTML = '"' + chuoi + '" => "' + vietHoaDauTu(chuoi) + '"';
