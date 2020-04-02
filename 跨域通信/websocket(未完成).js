//npm install nodejs-websocket --save,安装websocket的模板

let ws = require("nodejs-websocket");
let sever = ws.createServer((conn) => {
    conn.on("text",(str)=>{
        console.log(str);  //打印客户端传过来的参数
    })
    console.log("有人访问")
    setTimeout(function () {
        conn.sendText('来自客户端的数据');
    },5000)
}).listen(2333,()=>{
    console.log('the server listen 2333')
})
