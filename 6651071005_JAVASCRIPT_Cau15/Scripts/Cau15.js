// Sinh viên: Lê Cường Bảo - MSSV: 6651071005 - Câu 15
var User = { Name: "Max", Age: 20 };
var u = User;
var kq = "a) Thông tin u ban đầu:\n   Name: " + u.Name + ", Age: " + u.Age + "\n";
u.Surname = "Lee";
kq += "b) Sau khi thêm Surname:\n   Name: " + u.Name + ", Age: " + u.Age + ", Surname: " + u.Surname + "\n";
u.Age = 30;
kq += "c) Sau khi đổi Age = 30:\n   Name: " + u.Name + ", Age: " + u.Age + ", Surname: " + u.Surname;
document.getElementById("kq").innerHTML = kq;
