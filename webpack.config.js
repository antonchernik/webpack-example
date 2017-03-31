const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
    resolve: {
        alias: {
            'load-image': 'blueimp-load-image/js/load-image.js',
            'load-image-meta': 'blueimp-load-image/js/load-image-meta.js',
            'load-image-scale': 'blueimp-load-image/js/load-image-scale.js',
            'load-image-exif': 'blueimp-load-image/js/load-image-exif.js',
            'canvas-to-blob': 'blueimp-file-upload/node_modules/blueimp-canvas-to-blob/js/canvas-to-blob.js'
        }
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
        let plugins = [];

        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new ExtractTextPlugin('app.bundle.css'));
        plugins.push(new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }));
        return plugins;
    })(),
    module: {
        rules: [

        ],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.less$/,
            loader: 'style!css!autoprefixer-loader?{browsers:["> 1%","IE 7"]}!less'
        }, {
            test: /\.css/,
            loader: 'style!css!autoprefixer-loader?{browsers:["> 1%","IE 7"]}'
        }, {
            test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=8192&name=/img-[sha512:hash:base64:7].[ext]'
        }]
    }
};