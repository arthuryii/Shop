var params = [];

function GenerateParams() {
    var maxIndex = params.length - 1;
    var paraStr = "";
    for (var i = 0; i < params.length; i++) {
        if (params[i])
            paraStr += params[i];
        else
            paraStr += '0';
        if (i != maxIndex)
            paraStr += '-';
    }
}

function selType(pid, id) {
    params[pid] = id;
}

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
    var reg_id = /@id/g;
    var reg_pid = /@pid/g;
    var reg_img_path = /@img_path/g;
    var reg_name = /@name/g;
    var reg_price = /@price/g;
    var reg_count = /@count/g;

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
    //Headroom
    $("#header").headroom({
        "tolerance": 5,
        "offset": 50,
        "classes": {
            "initial": "animated",
            "pinned": "fadeInDown",
            "unpinned": "fadeOutUp"
        }
    });
    $("footer").headroom({
        "tolerance": 5,
        "offset": 50,
        "classes": {
            "initial": "animated",
            "pinned": "fadeInUp",
            "unpinned": "fadeOutDown"
        }
    });
    //Toggle Filters
    $("#btn-collapse").click(function () {
        if ($(this).text() == "隐藏") {
            $("#filter-container").hide();
            $("#btn-collapse").text("显示");
        } else {
            $("#filter-container").show();
            $("#btn-collapse").text("隐藏");
        }
    });
    //FILTERS
    var selectTemplate = '<li><a class="text-center" href="javascript:selType(@pid,@id)">@name</a></li>';
    var temp = "";
    for (var j = 0; j < select.length; j++) {
        temp += '<div class="row"><div class="col-md-1 text-right"><span class="label label-danger label-lg">' + select[j].name + '</span></div><div class="col-md-10"><ul class="nav nav-pills" id="shell-type">';
        for (var i = 0; i < select[j].data.length; i++) {
            var inn = selectTemplate.replace(reg_id, select[j].data[i].id);
            inn = inn.replace(reg_name, select[j].data[i].name);
            inn = inn.replace(reg_pid, select[j].id);
            temp += inn;
        }
        temp += '</ul></div></div>';
    }
    $("#filter").html(temp);
    //LOAD ITEMS
    var prog = dialog.find('.progress-bar');
    //var shell_list = load data...
    prog.css("width", "50%");
    var progressNum = 50;
    var html = "<div class='row'>";
    var template = '<div class="col-md-2"><div class="thumbnail"><img class="preview-sm" src="@img_path" alt="@name"/><div class="caption"><p class="text-center text-title">@name</p><p class="text-danger text-center"><font class="text-price">￥@price</font></p><p class="text-warning text-center">库存数量：@count</p><p class="btn-group-sm text-center"><a href="javascript:buy(@id)" type="button" class="btn btn-success">快速购买</a><a href="javascript:details(@id)" type="button" class="left-5 btn btn-default">查看详情</a></p></div></div></div>';
    for (var i = 0; i < shell_list.length; i++) {
        var temp = template.replace(reg_id, shell_list[i].id);
        temp = temp.replace(reg_img_path, shell_list[i].img_path);
        temp = temp.replace(reg_name, shell_list[i].name);
        temp = temp.replace(reg_price, shell_list[i].price.toFixed(2));
        temp = temp.replace(reg_count, shell_list[i].count);
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