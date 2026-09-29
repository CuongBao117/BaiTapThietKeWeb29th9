// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 2
function laNamNhuan(y) {
  return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
}
var nam = 2024;
document.getElementById("kq").innerHTML =
  "Năm " + nam + (laNamNhuan(nam) ? " là năm nhuận." : " không phải là năm nhuận.");
