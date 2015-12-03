# gulp-relevant
This is open for gulp study.It is a good usefull guide for gulp use.


## 为什么要用gulp
这个项目示例是提供想要学习gulp和相关工具插件的人阅读。本说明不解释为什么要使用gulp这个问题。如果读者觉得需要探讨，可以联系我。

## 文件说明
gulpfile.js：为gulp的默认配置文件  
webpack.config.js：为webpack的默认配置文件  
<span style="color:red;">**另外代码里面会有一定的注释。**</span>

## 项目运行说明
1. pull（拉）了项目之后，先运行`sudo npm install`安装依赖的组件  
2. 为了能够运行gulp和webpack，你需要安装全局的gulp和webpack以便在命令行中使用gulp命令和webpack命令，安装方法为在命令行输入并执行`sudo npm install gulp webpack`。注意，这里可以同时安装多个npm模块  
3. 在命令行中进入到项目的根目录，使用gulp命令，可以执行使用gulp进行项目构建的流程，命令行会输出各种结果  
4. 在命令行中进入到项目的根目录下，使用webpack命令，可以执行使用webpack进行项目构建的流程，命令行会输出各种结果  

## 项目目标
学会使用gulp、webpack以及一系列相关的项目构建工具的使用。

## webpack和gulp
为什么把这两个东西单独拿出来说呢。我们这里介绍的是gulp，但是webpack使用自己单独的配置文件，所以单独拿出来说明。

## gulp的使用
reactify可以和gulp配合得很好，如果只是使用gulp-react，那么他不能和gulp直接配合，需要做很多额外的工作

vinyl-source-stream这个插件的作用就是把browserify生成的代码打包成gulp可以理解的代码，因为browserify本身不是为了gulp开发的，所以他的输出不能直接用在gulp中，通过使用这个插件可以把browserify的输出转换成gulp可以使用的输入，这样子她们就可以再次通过gulp连接起来

## webpack的使用
webpack官方说明就是：module bundler。简单来说就是模块合并工具，用途上和Browserify是相同的。但是webpack更加高端，从诞生开始webpack瞄准的就是大型单页应用。对于一些单页应用来说，他的功能非常多，达到几百个模块或者页面，那么这种就是大型单页应用。webpack的目标是专家用户，也就是前端专精程序员。


browserify还是需要手动指定entries,如果有几百个页面或者更多，那么这种手动指定会非常的麻烦，管理起来非常复杂。Webpack就是为解决这个问题而生的。他创作的目标就是解决大型单页应用的模块化以及合并。

Webpack和browserify的主要区别有两点：  
1. Webpack包含了所有的静态资源，browserify没有包含图片这样的资源；  
2. Webpack自动生成所有的entry point，而browserify需要手动指定entry point

Webpack的两大特色：code splitting和loader  
1. webpack中code splitting就是代码分割，也就是对应browserify中的entry point，但是webpack中code splitting是自动完成，执行的时候，自动按照页面对应的生成js文件，这也就是他支持大型单页应用的特性，更多的工作自动完成，而不需要手动操作太多，这也是他和browserify的明显区别。  
2. loader就是处理各种静态文件，并且支持串联操作。

jsx-loader与webpack的关系就好比browserify与reactify，因为webpack本身不能处理jsx，我们必须使用jsx-loder，loader就是处理静态文件专用的东西


## Relevant Helps
#### <a href="http://www.appinn.com/markdown/">Markdown 语法说明 (简体中文版)</a>
