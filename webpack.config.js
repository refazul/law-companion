var webpack          = require('webpack');
const path           = require('path');

module.exports = {
    output     : {
        path   : path.resolve(__dirname, 'public', 'js')
    },
    entry      : {
        'home' : './src/js/home.js',
        'home2' : './src/js/home2.js',
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
            'quicklink': path.resolve(__dirname, 'src', 'js', 'widgets', 'quicklink.js'),
            'quicklink2': path.resolve(__dirname, 'src', 'js', 'widgets', 'quicklink2.js'),
            'quicklink3': path.resolve(__dirname, 'src', 'js', 'widgets', 'quicklink3.js'),
            'footer': path.resolve(__dirname, 'src', 'js', 'widgets', 'footer.js'),

            'accordion': path.resolve(__dirname, 'src', 'js', 'widgets', 'accordion.js'),
        }
    }
};