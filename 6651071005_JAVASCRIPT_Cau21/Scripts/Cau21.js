// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 21
var thu = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
var ngay = 12, thang = 1, nam = 2015;
var d = new Date(nam, thang - 1, ngay);
document.getElementById("kq").innerHTML = "Ngày " + ngay + "/" + thang + "/" + nam + " là " + thu[d.getDay()];
