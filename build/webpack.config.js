const path=require('path')

module.exports={
    entry: {
        app: path.join(__dirname,"../client/app.js")
    },
    output:{
        filename: '[name].[hash].js',//文件名有改动刷新浏览器缓存
        path: path.join(__dirname,'../dist'),
    }
}