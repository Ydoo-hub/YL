/*
* JSONP
* 利用动态生成  <script> 来进行通信，使用script不会造成跨域的情况，因为script 标签的发送请求不是xml而是json
* 造成跨域的条件要有xml请求，一旦没有了xml请求，变成json 便没有跨域这一说了
* /


 */
/*
* 方案一：用<script src="服务端接口地址"> 代替 ajax发送请求
* */
//服务端将要发送的数据填充在一条js语句中，比如node端
var hello = "你好";
res.write(`document.write("${hello}")`);

//前端只需要调用
<script src="服务端接口地址">
//执行即可，就可以收到后端放回的js语句字符串，便同时执行: document.write("${hello}")

//不足：执行语句写在了服务端，写死了

/*
*
* 方案二：
* 提前在客户端定义一个函数，用于处理服务端放回的请求，
* 服务端仅仅使用函数拼接一条函数调用js就可以了
*
* */

//客户端
<script src="服务端接口地址">
function show(hello){
    //任意执行语句
    console.log(hello)
};
//服务端
res.write(`show("${hello}")`);

//不足：执行语句写在了服务端，函数名字也写死了

/*
*
* 方案三：
* 用请求参数，将函数名传递给服务器,在url后面带上callback=函数名
*
* */

//客户端
<script src="localhost:3000?callback=show">
function show(hello){
    //任意执行语句
    console.log(hello)
};

//服务端
var callback = res.query.callback;
res.write(`${callback}+("${给前端的参数hello}")`)
// 将callback函数动态拼接到返回给前端的语句中就可以

//不足，只能在一个页面使用<script>写死了


/*
* 方案四：
* 每次单击按钮时动态创建<script>，不带上</script>
* 每次动态生成之后都要删了，不然就一直留着
* */

//客户端
document.getElementById("btn").click = function () {
    //  动态生产<script> 不能带上</script>
    var script = document.createElement('script');
    script.src = 'localhost:3000?callback=show'
    document.body.appendChild(script)
};

//移除执行完的script 以免造成堆叠

document.body.removeChild("body>script:last");

//服务端
var callback = res.query.callback;
res.write(`${callback}+("${给前端的参数hello}")`)
