
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
    Tada($("#logo").click(function () {
        Tada($(this))
    }));
    var dialog = bootbox.dialog({
        message: '<div class="progress progress-striped active">' +
            '<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%">' +
            '<span class="sr-only">45% Complete</span>' +
            '</div>' +
            '</div>',
        title: "正在努力地加载...",
        closeButton: false
    });
    var prog = dialog.find('.progress-bar');
    //var shell_list = load data...
    prog.css("width", "50%");
    var progressNum = 50;
    var html = "<div class='row'>";
    //a href="details.html?id=@id"
    var template = '<div class="col-md-2"><div class="thumbnail"><img class="preview-sm" src="@img_path" alt="@name"/><div class="caption"><p class="text-center">@name</p><p class="text-danger text-center">￥@price</p><p class="text-warning text-center">库存数量：@count</p><p class="btn-group-sm text-center"><a href="javascript:buy(@id)" class="btn btn-success">快速购买</a><a href="javascript:details(@id)" class="left-5 btn btn-default">查看详情</a></p></div></div></div>';
    for (var i = 0; i < shell_list.length; i++) {
        var temp = template;
        for (var pn in shell_list[i]) {
            var reg = new RegExp("@" + pn, 'g');
            temp = temp.replace(reg, shell_list[i][pn]);
        }
        html += temp;
        if (i % 6 == 5) {
            html += "</div>";
            if (i != shell_list.length - 1)
                html += "<div class='row'>";
            progressNum = 50 + i * 50.0 / shell_list.length;
            prog.css("width", progressNum + '%');
        }
    }
    $("#items").html(html);
    bootbox.hideAll()
})