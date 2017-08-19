module.exports = {
    entry:  {
        app:[
            __dirname + "/app/index.js"
        ]
    },
    output: {
        path: __dirname + "/build" ,//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
        ]
    },
    devServer:{
        hot:true,
        inline:true,
        port:8080, //端口你可以自定义
        contentBase: "build/"
    }
}
