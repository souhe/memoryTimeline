'use strict';

var webpack = require('webpack');
var path = require('path');
var Webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var webpack_isomorphic_tools_plugin = new Webpack_isomorphic_tools_plugin(require('./webpack-isomorphic-tools'));

var host = (process.env.HOST || 'localhost');
var port = parseInt(process.env.PORT) + 1 || 8082;

module.exports = {
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-object-rest-spread']
                }
            },
            { 
                test: /\.less$/, 
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!less?outputStyle=expanded&sourceMap') 
            }
        ]
    },
    output: {
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: 'http://' + host + ':' + port + '/dist/'
    },
    plugins: [
        new webpack.DefinePlugin({
            __CLIENT__: true,
            __SERVER__: false,
            __DEVELOPMENT__: true
        }),    
        new ExtractTextPlugin('[name]-[chunkhash].css', {allChunks: true}),
        webpack_isomorphic_tools_plugin.development()
    ],
    devtool: "inline-source-map"
}