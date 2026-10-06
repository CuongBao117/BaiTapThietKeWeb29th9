// Câu 6: Đếm và hiển thị các mục của dropdown list trong alert
$(document).ready(function () {
    $('#btnCount').on('click', function () {
        var items = [];
        $('#mySelect option').each(function () {
            items.push($(this).text());
        });
        alert('Có ' + items.length + ' mục: ' + items.join(', '));
    });
});
