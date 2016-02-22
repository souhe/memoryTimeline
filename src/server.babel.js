require('babel-register')({
    presets: ['react', 'es2015'],
    plugins: ['transform-decorators'],
    sourceMap: 'inline',
});

require('./server.js');