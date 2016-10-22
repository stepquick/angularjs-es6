import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import common from './webpack.common.babel';

import CleanWebpackPlugin from 'clean-webpack-plugin';

const config = webpackMerge(common, {
    output: {
        path: __dirname + '/../dist',
        publicPath: '/angular-es6/',
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].[hash].map',
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: process.cwd()
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
    ]
});

export default config;