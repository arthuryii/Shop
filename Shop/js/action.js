
function Tada(jqEle) {
    jqEle.removeClass().addClass('tada animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });
}

var phoneType = ['iPhone 5S', 'iPhone 5C', 'iPhone 5', 'iPhone 4S', 'iPhone 4', 'Galaxy S5', 'Galaxy Note3', 'Galaxy Note2', 'Galaxy S4'];

function sel_Phone(index) {
    $("#selected_Phone").text(phoneType[index]);
    Tada($("#selected_Phone"));
}

$(function () {
    Tada($("#logo").click(function () { Tada($(this)) }));
    bootbox.dialog({
        message: '<div class="progress progress-striped active">' +
                '<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%">' +
                    '<span class="sr-only">45% Complete</span>' +
                '</div>' +
            '</div>',
        title: "正在努力地加载...",
        closeButton: false
    });
})