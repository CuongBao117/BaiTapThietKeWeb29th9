// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 16
var HinhTru = {
  radius: 10,
  height: 15,
  theTich: function () { return Math.PI * this.radius * this.radius * this.height; },
  dienTichToanPhan: function () { return 2 * Math.PI * this.radius * (this.radius + this.height); }
};
var kq = "a) Thể tích (radius = " + HinhTru.radius + ", height = " + HinhTru.height + "): " + HinhTru.theTich().toFixed(2) + "\n";
HinhTru.height = 30;
kq += "b) Sau khi cập nhật height = 30, diện tích toàn phần: " + HinhTru.dienTichToanPhan().toFixed(2);
document.getElementById("kq").innerHTML = kq;
