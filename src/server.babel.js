require('babel-register')({
    presets: ['react', 'es2015'],
    plugins: ['transform-decorators']
});

require('./server.js');