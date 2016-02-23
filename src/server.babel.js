require('babel-register')({
    presets: ['react', 'es2015'],
    plugins: ['transform-object-rest-spread'],
    sourceMap: 'inline',
});

global.__CLIENT__ = false;
global.__SERVER__ = true;

require('./server.js');