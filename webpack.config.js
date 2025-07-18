const path = require('path');

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
    },
    module: {
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: [],
}