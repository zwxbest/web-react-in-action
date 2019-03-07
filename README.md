### hot-module

有人会问 webpack-dev-server 已经是热加载了，能做到只要代码修改了页面也自动更新了，为什么在 react 项目还要安装 react-hot-loader 呢？其实这两者的更新是有区别的，webpack-dev-server 的热加载是开发人员修改了代码，代码经过打包，重新刷新了整个页面。而 react-hot-loader 不会刷新整个页面，它只替换了修改的代码，做到了页面的局部刷新。但它需要依赖 webpack 的 HotModuleReplacement 热加载插件。