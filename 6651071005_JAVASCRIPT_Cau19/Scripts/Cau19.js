// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 19
var goc = 10000000;   // số tiền gốc
var laiSuat = 7;      // lãi suất hàng năm (%)
var nam = 5;          // số năm
var tong = goc * Math.pow(1 + laiSuat / 100, nam);
document.getElementById("kq").innerHTML =
  "Số tiền gốc: " + goc.toLocaleString("vi-VN") + " VNĐ\n" +
  "Lãi suất: " + laiSuat + "%/năm\n" +
  "Số năm: " + nam + "\n" +
  "Tổng tiền sau " + nam + " năm: " + Math.round(tong).toLocaleString("vi-VN") + " VNĐ";
