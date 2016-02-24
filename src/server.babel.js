var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
var projectBasePath = require('path').resolve(__dirname, '..')

require('babel-register')({
    presets: ['react', 'es2015'],
    plugins: ['transform-object-rest-spread'],
    sourceMap: 'inline',
});

global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DISABLE_SSR__ = false;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack-isomorphic-tools'))
    .development(__DEVELOPMENT__)
    .server(projectBasePath, function() {
        require('../src/server');
    });
