var path = require('path');

module.exports = {

    entry: {
        page1:'./js/reflux.js',
        page2:'./js/reflux-text.js',
        page3:['./js/reflux-api.js']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js|jsx$/, loaders: ['babel'] }
        ]
    }
};
