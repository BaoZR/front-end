const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development', // 设置mode
    entry: {
        app: './src/index.js',
        hot: 'webpack/hot/dev-server.js',
        client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: false,
        client: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

};