// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 20
var now = new Date();
var ngay = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
var gio = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
window.alert("Ngày: " + ngay + " Giờ: " + gio);
