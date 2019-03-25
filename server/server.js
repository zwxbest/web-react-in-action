const express = require('express')
const ReactSSR = require('react-dom/server')
const app = express();
const serverEntry = require('../dist/server-entry').default;
const fs= require('fs');
const path= require('path');

const isDev = process.env.NODE_ENV === 'development';

const template =fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf8');

app.use('/public',express.static(path.join(__dirname,'../dist')));

//任何请求都服务器端渲染
app.get('*',function(req,res){
    const appString = ReactSSR.renderToString(serverEntry);
    res.send(template.replace('<!-- app -->',appString));
});

if(!isDev){
    const template = fs.readFileSync(path.join(__dirname,'../dist/index.html'),"utf8");
    app.use('/public',express.static(path.join(__dirname,'../dist')));
    app.get('*',function (req,res) {
        const appString = ReactSSR.renderToString(serverEntry);
        res.send(template.replace('<!-- app -->',));
    })
}else {
    const devStatic = require('./util/dev-static');
    devStatic(app);
}

app.listen(3333,function () {
   console.log('server is listening on 33333');
});