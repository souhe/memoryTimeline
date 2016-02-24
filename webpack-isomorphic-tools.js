var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

module.exports = {
    assets: {
        images: {
            extensions: [
                'jpeg',
                'jpg',
                'png',
                'gif'
            ],
            parser: WebpackIsomorphicToolsPlugin.url_loader_parser
        },
        fonts: {
            extensions: [
                'woff',
                'woff2',
                'ttf',
                'eot'
            ],
            parser: WebpackIsomorphicToolsPlugin.url_loader_parser
        },
        svg: {
            extension: 'svg',
            parser: WebpackIsomorphicToolsPlugin.url_loader_parser
        },
        style_modules: {
            extensions: ['less', 'scss'],
            filter: function(module, regex, options, log) {
                return regex.test(module.name);
            },
            path: function(module, options, log) {
                return module.name;
            },
            parser: function(module, options, log) {
                return module.source;
            }
        }
    }
}