const express = require('express')
const ReactSSR = require('react-dom/server')
const app = express();
const serverEntry = require('../dist/server-entry').default;
//任何i请求都服务器端渲染
app.get('*',function(req,res){
    const appString = ReactSSR.renderToString(serverEntry);
    res.send(appString);
});

app.listen(3333,function () {
   console.log('server is listening on 33333');
});