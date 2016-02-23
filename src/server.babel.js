require('babel-register')({
    presets: ['react', 'es2015'],
    plugins: ['transform-object-rest-spread'],
    sourceMap: 'inline',
});

require('./server.js');