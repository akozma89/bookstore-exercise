var path                = require('path'),
    webpack             = require('webpack'),
    htmlWebpackPlugin   = require('html-webpack-plugin'),
    pageData            = require('./source/data/index.json'),
    extractTextPlugin   = require('extract-text-webpack-plugin');

var paths = {
    images:     './source/images/',
    js:         './source/js/',
    styles:     './source/styles/',
    templates:  './source/templates/'
};

module.exports = {
    entry: {
        app:    paths.js + 'index.js',
        vendor: [ 'react', 'react-dom', 'react-bootstrap'  ]
    },
    output: {
        filename:   '[name].bundle.js',
        path:       path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test:       /.(jsx|js)?$/,
                loader:     'babel-loader',
                exclude:    /(node_modules|.ejs?$)/,
                query: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                }
            },
            {
                test:   /\.(scss|css)$/,
                use: extractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
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
        new htmlWebpackPlugin({
            pageData:   pageData,
            favicon:    paths.images + 'book-favicon.png',
            template:   paths.templates + 'index.ejs',
            minify: {
                removeComments:             true,
                removeRedundantAttributes:  true,
                useShortDoctype:            true
            }
        }),
        new extractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            "React": "react",
            "ReactDOM": "react-dom"
        })
    ]
};