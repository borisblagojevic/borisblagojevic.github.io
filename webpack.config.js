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
        // Add this line to correctly handle asset paths
        assetModuleFilename: 'assets/[name][ext]',
    },
    module: {
        rules: [
            // 1. SCSS/CSS Rule (Kept your fixed version)
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            // 2. Images Rule (Uses Asset Module)
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource', // emits a separate file and exports the URL
                generator: {
                    // Optional: customize the output directory for images
                    filename: 'images/[name][ext]'
                }
            },
            // 3. Video/WebM Rule (Uses Asset Module)
            {
                test: /\.(webm|mp4|mov)$/i,
                type: 'asset/resource', // emits a separate file and exports the URL
                generator: {
                    // Optional: customize the output directory for videos
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
            // Simplified filename path (as recommended in the prior response)
            filename: 'index.html',
        })
    ],
}