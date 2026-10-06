// Câu 9: Form đăng ký + validate bằng jQuery
$(document).ready(function () {

    function setErr(id, msg) { $('#err-' + id).text(msg); return msg === ''; }

    function isValidBirthday(s) {
        // mm/dd/yyyy hoặc mm-dd-yyyy (hai dấu phân cách phải giống nhau)
        var m = /^(\d{1,2})([\/-])(\d{1,2})\2(\d{4})$/.exec(s);
        if (!m) return false;
        var month = parseInt(m[1], 10), day = parseInt(m[3], 10), year = parseInt(m[4], 10);
        if (month < 1 || month > 12) return false;
        if (year >= new Date().getFullYear()) return false;      // năm phải nhỏ hơn năm hiện tại
        var d = new Date(year, month - 1, day);                  // kiểm tra ngày có tồn tại
        return d.getFullYear() === year && d.getMonth() === month - 1 && d.getDate() === day;
    }

    // Email: đúng 1 dấu @; trước @ có tối đa 1 dấu chấm; sau @ có ít nhất 1 dấu chấm
    var emailRe = /^[^@\s.]+(\.[^@\s.]+)?@[^@\s.]+(\.[^@\s.]+)+$/;

    $('#btnFinish').on('click', function () {
        var ok = true;
        $('#success').text('');

        ok = setErr('name',   $.trim($('#name').val()) ? '' : 'Không được để trống') && ok;
        ok = setErr('sex',    $('input[name="sex"]:checked').length ? '' : 'Vui lòng chọn giới tính') && ok;

        var email = $.trim($('#email').val());
        ok = setErr('email',  !email ? 'Không được để trống'
                              : (emailRe.test(email) ? '' : 'Email không hợp lệ')) && ok;

        var bd = $.trim($('#birthday').val());
        ok = setErr('birthday', !bd ? 'Không được để trống'
                              : (isValidBirthday(bd) ? '' : 'Ngày sinh không hợp lệ (mm/dd/yyyy hoặc mm-dd-yyyy)')) && ok;

        ok = setErr('street', $.trim($('#street').val()) ? '' : 'Không được để trống') && ok;
        ok = setErr('city',   $.trim($('#city').val()) ? '' : 'Không được để trống') && ok;
        ok = setErr('region', $('#region').val() ? '' : 'Vui lòng chọn khu vực') && ok;

        var zip = $.trim($('#zip').val());
        ok = setErr('zip',    !zip ? 'Không được để trống'
                              : (/^\d{5}$/.test(zip) ? '' : 'Zip code phải gồm đúng 5 số')) && ok;

        if (ok) $('#success').text('Đăng ký thành công!');
    });

    $('#btnClear').on('click', function () {
        $('#regForm')[0].reset();
        $('.err').text('');
        $('#success').text('');
    });
});
