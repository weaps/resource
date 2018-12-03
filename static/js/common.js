$(function () {
    $(".category-box dl").hover(function () {
        $(this).find("dd").show();
    },function () {
        $(this).find("dd").hide();
    });
    
    
    //首页区域下拉区域
    $(".grade-type > li").click(function () {
        $(this).children(".classify").addClass("active").parents("li").siblings().children(".classify").removeClass("active")
        if($(this).children(".grade-children").is(':hidden')) {
            $(this).children(".grade-children").show();
            $(this).children(".classify").children("i").removeClass("icon-zhankai").addClass("icon-zhankai2");
        }else {
            $(this).children(".grade-children").hide();
            $(this).children(".classify").removeClass("active");
            $(this).children(".classify").children("i").addClass("icon-zhankai").removeClass("icon-zhankai2");
        }
        $(this).siblings().children(".grade-children").hide();
        $(this).siblings().children(".classify").children("i").addClass("icon-zhankai").removeClass("icon-zhankai2");
    });

    // 菜单
    $("#menu .more").click(function () {
        var text = $(this).children("em").text();
        if (text === '更多') {
            $(this).parent(".menu").css("height",'auto');
            $(this).children("em").text("收起");
            $(this).children("i").removeClass("icon-zhankai").addClass("icon-zhankai2");
        }else {
            $(this).parent(".menu").removeAttr("style");
            $(this).children("em").text("更多");
            $(this).children("i").removeClass("icon-zhankai2").addClass("icon-zhankai");
        }
    });


    // 资源同步筛选
    $("#filtrate .more").click(function () {
        var text = $(this).children("em").text();
        if (text === '更多') {
            $(this).parent(".message").css("height",'auto');
            $(this).children("em").text("收起");
            $(this).children("i").removeClass("icon-zhankai").addClass("icon-zhankai2");
        }else {
            $(this).parent(".message").removeAttr("style");
            $(this).children("em").text("更多");
            $(this).children("i").removeClass("icon-zhankai2").addClass("icon-zhankai");
        }
    });

    //同步资源下拉区域
    $("#resList .size-input").hover(function () {
        var flag = $(this).parent(".item").find(".list-children").is(':hidden');
        if(flag === true) {
            $(this).parent(".item").find(".list-children").show();
            $(this).children("i").removeClass("icon-zhankai").addClass("icon-zhankai2");
        }else {
            $(this).parent(".item").find(".list-children").hide();
            $(this).children(".classify").removeClass("active");
            $(this).children("i").addClass("icon-zhankai").removeClass("icon-zhankai2");
        }
        return false;
    });
    $("#resList .list-children li").click(function () {
        var text = $(this).text();
        $(this).parents(".size-input").children(".size").text(text);
    });
    
    // 通用全部下拉
    $(".more-down").hover(function () {
        $(this).children(".list-children").slideToggle();
    });
});