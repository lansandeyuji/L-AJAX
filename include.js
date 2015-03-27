/**
 * 页面模版引入视图模型
 */
define('include',function(){
    return include=avalon.define({
        $id:'include',
        nav:'',//导航
        url:"",//主体
        footer:"",//页脚
        modal:""//弹出模态框

    })
});