const express = require('express')
const ReactSSR = require('react-dom/server')
const app = express();
const serverEntry = require('../dist/server-entry').default;
const fs= require('fs');
const path= require('path')

const template =fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf8');

app.use('/public',express.static(path.join(__dirname,'../dist')));

//任何i请求都服务器端渲染
app.get('*',function(req,res){
    const appString = ReactSSR.renderToString(serverEntry);
    res.send(template.replace('<app></app>',appString));
});

app.listen(3333,function () {
   console.log('server is listening on 33333');
});