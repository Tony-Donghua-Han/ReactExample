const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "built"),
        publicPath: "",
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(scss|sass)/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.[contenthash].css",
        }),
    ],
});
