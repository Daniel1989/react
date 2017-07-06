var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './examples/daniel/app.js'),
    output: {
        path: path.resolve(__dirname, './examples/daniel'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader'
        }]
    }
};