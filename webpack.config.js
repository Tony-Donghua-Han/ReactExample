const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    mode: "none",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Hello world",
            filename: "mainpage.html"
        }),
    ]
}