var gulp = require('gulp');
var react = require('gulp-react');
var babel = require('gulp-babel');
var less = require('gulp-less');
var sass = require('gulp-sass');
var jasmine = require('gulp-jasmine');
var mocha = require('gulp-mocha');
var browserify_gulp = require('gulp-browserify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');

//reactify可以和gulp配合得很好，如果只是使用gulp-react，那么他不能和gulp直接配合，需要做很多额外的工作
//vinyl-source-stream这个插件的作用就是把browserify生成的代码打包成gulp可以理解的代码，因为browserify本身不是为了gulp开发的，所以他的输出不能直接用在gulp中，通过使用这个插件可以把browserify的输出转换成gulp可以使用的输入，这样子她们就可以再次通过gulp连接起来
var source = require('vinyl-source-stream');
var reactify = require('reactify');


//browserify还是需要手动指定entries,如果有几百个页面或者更多，那么这种手动指定会非常的麻烦，管理起来非常复杂。Webpack就是为解决这个问题而生的。他创作的目标就是解决大型单页应用的模块化以及合并。
//Webpack和browserify的主要区别有两点：1.Webpack包含了所有的静态资源，browserify没有包含图片这样的资源；2.Webpack自动生成所有的entry point，而browserify需要手动指定entry point
//Webpack的两大特色：code splitting和loader
//jsx-loader与webpack的关系就好比browserify与reactify，因为webpack本身不能处理jsx，我们必须使用jsx-loder，loader就是处理静态文件专用的东西


gulp.task('jsx', function() {
    browserify({
            entries: ['./src/myui.jsx'],//这个就是使用entry point解决方案来解决js文件合并之后文件过大，而并不是每个页面都需要这些代码。这个解决方案完整的方式是使用entry point和common.js的方式
            transform: [reactify]
        })
        .bundle()
        .pipe(source('myui.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('browserify-uglify', function() { //使用browserify进行模块化开发,并使用uglify进行代码压缩
    return gulp.src('./src/index.js')
        .pipe(browserify_gulp())
        //.pipe(gulp.dest('./build'))
        .pipe(uglify())
        .pipe(gulp.dest('./dest'))
});

gulp.task('mocha test', function() { //使用mocha进行代码测试
    return gulp.src('./src/test2.js')
        .pipe(mocha());
});

gulp.task('jasminetest', function() { //使用jasmine进行代码测试
    return gulp.src('./src/test1.js')
        .pipe(jasmine())
});

gulp.task('less', function() { //代码转换－less转换成css
    return gulp.src('./src/css1.less')
        .pipe(less())
        .pipe(gulp.dest('./dest'));
});

gulp.task('sass', function() { //代码转换－sass转换成css
    return gulp.src('./src/css2.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dest'));
})

gulp.task('react', function() {
    return gulp.src('./src/myui.js') //代码转换-jsx转换成es5
        .pipe(react())
        .pipe(babel({
            presets: ['babel-preset-es2015']
        }))
        .pipe(gulp.dest('./dest'));
})

gulp.task('default', ['less', 'sass', 'jasminetest', 'mocha test', 'browserify-uglify','react','jsx'], function() {
    
});
