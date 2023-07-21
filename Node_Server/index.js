const express = require('express');

const localhost = require('./util/node.config');
const apiList = require('./util/url');

const app = express();

app.use(express.json()); 

console.log("\n\n开始加载接口方法及路径：\n");

apiList.forEach(item => {
    app[item.method](item.url, item.fn);
    console.log('method：', item.method, '，url：', item.url);
});

console.log("\n接口方法及路径已全部加载完成\n\n");


console.log("正在启动node服务...\n");
app.listen(localhost.host, () => {
  console.log('node服务已启动...');
  console.log(`http:localhost:${localhost.host}`);
  console.log(`http:127.0.0.1:${localhost.host}`);
});