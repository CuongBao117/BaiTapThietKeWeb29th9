// Câu 8: Máy tính (+, -, x, /, ^) bằng jQuery
$(document).ready(function () {
    $('.op').on('click', function () {
        var op = $(this).data('op');
        var s1 = $.trim($('#num1').val());
        var s2 = $.trim($('#num2').val());
        var a = Number(s1), b = Number(s2);

        $('#msg').text('');
        if (s1 === '' || s2 === '' || isNaN(a) || isNaN(b)) {
            $('#result').val('');
            $('#msg').text('Vui lòng nhập hai số hợp lệ!');
            return;
        }

        var r;
        switch (op) {
            case '+': r = a + b; break;
            case '-': r = a - b; break;
            case '*': r = a * b; break;
            case '/':
                if (b === 0) {
                    $('#result').val('');
                    $('#msg').text('Không thể chia cho 0!');
                    return;
                }
                r = a / b; break;
            case '^': r = Math.pow(a, b); break;
        }
        $('#result').val(r);
    });
});
