'use strict';

var webpack = require('webpack');

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
                loader: 'style!css!less' 
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __CLIENT__: true,
            __SERVER__: false
        }),    
    ],
    devtool: "inline-source-map"
}