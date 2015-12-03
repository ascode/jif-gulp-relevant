module.exports = {
    entry: './src/myui.jsx',
    output: {
        path: './',
        filename: 'myui.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'jsx-loader'
        }]
    }
}
