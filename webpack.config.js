const path = require('path');
const webpack = require('webpack');

module.exports = {
    cache: true,
    hot: false,
    entry: {
        bundle: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ]
    },
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: "[name].js",
        sourceMapFilename: "[name].js.map"
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        inline: true,
        progress: true,
    },
    plugins: (function() {
        var plugins = [];

        plugins.push(new webpack.HotModuleReplacementPlugin());


        return plugins;
    })()
};