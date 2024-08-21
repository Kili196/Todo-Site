const HtmlWebpackPlugin = require('html-webpack-plugin');


const path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    stats: { warnings: false },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/index.html"],
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),

    ],
};