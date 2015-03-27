# call.js    解决ajax跨域请求的浏览器兼容问题

                    ie8、9  ajax  跨域

  ### 问题描述 ###
 avalon.ajax只对ie10以下的get跨域请求进行处理通过（jsonp）解决，没有兼容ie10以下的post跨域请求 .因此要解决avalon.ajax对ie8 9  跨域 post请求不支持的问题

   ### 使用方法 ###
使用$.call()方法实现ajax请求
示例如下：
 ```javascript
    $.call({
                //get or post请求
                type: 'post',
                //请求i地址 前提是已经配置全局apiURL,例如：var apiURL = 'https://api.tansuyun.cn/index.php?i=';
                i:5,
                //发送的数据
                data: {"Number": 6},
                //请求成功时的回调函数
                success: function (data) {
                       ...do something
                }
            });
 ```

 ### 整体实现思路 ###
首先判断浏览器版本，若为ie8 9 ,则使用XDomainRequest来进行跨域请求。否则，则将参数自动传入 avalon.ajax中调用。


在本文件中实现重点就是实现对ie8 ie9的跨域请求。


### 遇到的问题 ###
*    **问题**：tip和door等对象所在文件是通过index.html静态加入的，所以这些对象定义时使用require方法会出现错误（这些对象未定义）。

   ***解决方法***：不用requie定义并返回对象，而直接定义成对象
示例如下：
```javascript
      var tip = avalon.define({
                .....
           });
     //或者这样定义
      var tip= {
                .....
           };
 ```


*   **问题**：在ie8ie9下出现avalon.router 未定义的问题

  ** *解决方法***：在mmRequest.js引入后，添加 if lt IE 9 示例如下：
 ```html
       <!--[if lt IE 9]>
       <script src="./js/mmRouter.js"></script>
       <![endif]-->
 ```


