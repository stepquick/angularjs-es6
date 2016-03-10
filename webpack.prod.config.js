var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.tpl.html']
    },
    entry: {
        main: './src/main.js',
        vendor: ['jquery', 'bootstrap', 'angular', 'angular-ui-bootstrap']
    },
    output: {
        path: './dist',
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].[hash].map'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /(\.test.js$|node_modules)/},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.tpl.html/, loader: 'html'},
            {test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, loader: 'url?limit=50000'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new webpack.optimize.DedupePlugin(),
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: '[name].[hash].js', minChunks: Infinity }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false
        }),
    ],
    progress: true,
    colors: true,
    debug: false,
};
