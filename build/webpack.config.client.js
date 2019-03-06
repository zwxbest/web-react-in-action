const path=require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports={
    entry: {
        app: path.join(__dirname,"../client/app.js")
    },
    output:{
        filename: '[name].[hash].js',//文件名有改动刷新浏览器缓存
        path: path.join(__dirname,'../dist'),
        publicPath: '/public' //对应app.use('/public',express.static(path.join(__dirname,'../dist')));
    },
    module: {
        rules: [{
            test: /.jsx$/,
            loader: 'babel-loader' //js编译器
        }, {
                test: /.js$/,
                loader: 'babel-loader', //js编译器
            exclude:[
                path.join(__dirname,'../node_modules')
            ]
            }
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname,'../client/template.html')
        })
    ]
}