// Câu 2: Lấy Họ và tên từ hai input bằng jQuery
$(document).ready(function () {
    $('#form1').on('submit', function (e) {
        e.preventDefault(); // không reload trang
        var fname = $('input[name="fname"]').val();
        var lname = $('input[name="lname"]').val();
        alert('Họ và tên: ' + fname + ' ' + lname);
    });
});
