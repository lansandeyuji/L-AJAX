
//example作用域
define('example', function () {
    return example = avalon.define({
        $id: "example",
        login_account:'',//登陆用户名
        login_pwd:'',//登陆密码
        login: function () {//登陆事件

          //兼容ie6以上的浏览器
            $.call({
                type: 'post',
                i: 5,
                data: {account: example.login_account, pwd: example.login_pwd},
                success: function (data) {
                    if (data.c == 200) {
                        alert('成功');
                    }
                    //401   用户名或密码错误
                    else if (data.c == 401) {
                        alert('用户名或密码错误');
                    }
                    else {
                        alert('未知错误');
                    }
                }
            });

        }
    })
})