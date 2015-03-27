/**
 * 路由规则
 */
require(['mmRouter'], function () {
    //example
    avalon.router.get('/', function () {
        require(['exampleJs'], function () {
            include.url = "./body/example.html";
        })
    });
    avalon.history.start();
    avalon.scan();
})