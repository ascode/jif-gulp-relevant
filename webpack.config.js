//测试webpack基本的模块合并功能
// module.exports = {
//     entry: './src/myui.jsx',
//     output: {
//         path: './webpackdest',
//         filename: 'myui.js'
//     },
//     module: {
//         loaders: [{
//             test: /\.jsx$/,
//             loader: 'jsx-loader'
//         }]
//     }
// }


//测试webpack的code splitting功能
var webpack = require('webpack');
module.exports = {
    entry:{
        app:'./src/jqueryui1.js',
        app2:'./src/jqueryui2.js'
    },
    output:{
        path:'./webpackdest',
        filename:'[name].js'
    },
    plugins:[new webpack.optimize.CommonsChunkPlugin('common.js')],
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'jsx-loader'
            }
        ]
    }
}