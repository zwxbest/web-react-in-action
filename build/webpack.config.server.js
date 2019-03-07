const path=require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports={
    target: 'node',//在nodejs环境中执行
    entry: {
        app: path.join(__dirname,"../client/server-entry.js")
    },
    output:{
        filename: 'server-entry.js',
        path: path.join(__dirname,'../dist'),
        libraryTarget: "commonjs2",
        publicPath: '/public/'//对应app.use('/public',express.static(path.join(__dirname,'../dist')));
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

};