// Câu 4: Xóa mục đang chọn khỏi dropdown list
$(document).ready(function () {
    $('#btnRemove').on('click', function () {
        if ($('#colorSelect option').length === 0) {
            alert('Danh sách đã hết mục để xóa!');
            return;
        }
        $('#colorSelect option:selected').remove();
    });
});
