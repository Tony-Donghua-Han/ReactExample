const path = require("path");

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve("awesome-typescript-loader"),
            },
        ],
    });
    config.module.rules.push({
        test: /\.css/,
        use: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, "../")
    });
    config.module.rules.push({
        test: /\.(scss|sass)/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};
