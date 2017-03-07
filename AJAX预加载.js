$.ajaxSetup({
    global: true,
    type: "POST",
    dataType: "json",
    contentType: 'application/json',
    beforeSend: function (xhr, data) {

        if (data && data.type == "POST" && $("#ajaxLoading").length == 0) {
        //if (data  && $("#ajaxLoading").length == 0) {
            $("body").append(
                "<div id='ajaxLoading' style='top:45px;right:0;padding:5px;background-color:red;position:fixed;z-index:999999;width:120px;text-align:center;'>"+
                    "<span style='color:#fff;' class='font16'>"+
                        "<i class='fa fa-refresh fa-spin'></i>loading"+
                    "</span>"+
                "</div>");
        }
    },
    complete: function () {
        $("#ajaxLoading").remove();
    },
    error: function (o) {
        //if (o.responseText != null) {
        //    alert("错误:" + o.responseText);
        //}
        $("#ajaxLoading").remove();
        return false;
    }
});