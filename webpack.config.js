var path = require('path');
var APP_DIR = path.resolve(__dirname, './client');
var BUILD_DIR = path.resolve(__dirname, './client/public');

var config = [{
    entry: [
        APP_DIR + '/main.js'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        library: 'Application',
        libraryTarget: 'var'
    },
    resolve: {
        alias: {
            'react': path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.(jsx|js)$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    }
}];


module.exports = config;
