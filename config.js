/**
 * 配置文件
 */
require.config({
    paths: {
        exampleJs:"../../soul/example.js"
    }
});
//全局接口地址
var apiURL = 'https://api.tansuyun.cn/index.php?i=';

//getCookie用于取cookie中的数据
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

//setCookie用于将数据存于cookie中
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
