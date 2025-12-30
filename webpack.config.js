const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        port: 3333,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
        assetModuleFilename: 'assets/[name][ext]',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    // Optional: customize the output directory for images
                    filename: 'images/[name][ext]'
                }
            },
            // 3. Video/WebM Rule (Uses Asset Module)
            {
                test: /\.(webm|mp4|mov)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'videos/[name][ext]'
                }
            }
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            favicon: path.resolve(__dirname, './src/images/favicon/bbFavicon.svg'),
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
        })
    ],
}