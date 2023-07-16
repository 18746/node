const express = require('express');

const localhost = require('./util/node.config');
const url = require('./util/url');

const app = express();

app.use(express.json()); 

url.list.forEach(item => {
    app[item.method](item.url, item.fn);
})

app.listen(localhost.host, () => {
  console.log('服务已启动...');
  console.log(`http:localhost:${localhost.host}`);
  console.log(`http:127.0.0.1:${localhost.host}`);
});