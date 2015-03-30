/**
 * 路由规则
 */
require(['mmRouter'], function () {
    //examples

    avalon.router.get('/example0', function () {
        //确保已引入avalon.js 兼容ie6+
      require(['example0Js'], function () {
            include.url = "./body/example0.html";
        })
    });
    avalon.router.get('/example1', function () {
        //确保已引入avalon.mobile.js 兼容ie10+
        require(['example1Js'], function () {
            include.url = "./body/example1.html";
        })
    });

    avalon.history.start();
    avalon.scan();
})