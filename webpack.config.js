const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    mode: "none",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: ''
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader"
            },
            {
                test: /\.hbs$/,
                use: "handlebars-loader",
            },
            { 
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Hello world",
            filename: "mainpage.html",
            template: "src/index.hbs"
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    // Ignore import of react and react-dom so they can be loaded as separate script from 
    // html and have browser cache them instead
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
}