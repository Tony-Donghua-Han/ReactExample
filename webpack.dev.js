const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: ''
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        index: "mainpage.html",
        port: 9000
    },
});
