var webpack          = require('webpack');
const path           = require('path');

module.exports = {
    output     : {
        path   : path.resolve(__dirname, 'public', 'js')
    },
    entry      : {
        'home' : './src/js/home.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]

    },
    resolve: {
        alias:{
            'dropdown': path.resolve(__dirname, 'src', 'js', 'widgets', 'dropdown.js'),
            'navbar': path.resolve(__dirname, 'src', 'js', 'widgets', 'navbar.js'),
            'causelist': path.resolve(__dirname, 'src', 'js', 'widgets', 'causelist.js'),
        }
    }
};