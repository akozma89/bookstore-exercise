var path                = require('path'),
    HtmlWebpackPlugin   = require('html-webpack-plugin'),
    pageData            = require('./source/data/index.json'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var paths = {
    images:     './source/images/',
    js:         './source/js/',
    styles:     './source/styles/',
    templates:  './source/templates/'
};

module.exports = {
    entry: {
        app:    paths.js + 'index.js',
        vendor: [ 'react', 'react-dom' ]
    },
    output: {
        filename:   '[name].bundle.js',
        path:       path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test:       /.jsx?$/,
                loader:     'babel-loader',
                exclude:    /(node_modules|.ejs?$)/,
                query: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                }
            },
            /*{
                test:   /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:   /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'sass-loader',
                        'css-loader'
                    ],
                    fallback: 'style-loader'
                })
            },*/
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            pageData:   pageData,
            favicon:    paths.images + 'book-favicon.png',
            template:   paths.templates + 'index.ejs',
            minify: {
                removeComments:             true,
                removeRedundantAttributes:  true,
                useShortDoctype:            true
            }
        }),
        new ExtractTextPlugin('[name].css')
    ]
};