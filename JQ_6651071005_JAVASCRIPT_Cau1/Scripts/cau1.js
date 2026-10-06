// Câu 1: jQuery đổi fontSize, fontFamily, color khi nhấn nút
$(document).ready(function () {
    $('#jsstyle').on('click', function () {
        $('#text').css({
            'font-size': '24px',
            'font-family': 'Arial, sans-serif',
            'color': 'red'
        });
    });
});
