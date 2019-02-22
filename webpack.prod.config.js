const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');    // Plugin for seperate css file
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: '' // for file src location
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin({
            filename:'style.[contenthash].css'
        }),
        new cleanWebpackPlugin('dist'), //(['dist', 'src/log'])
        new htmlWebpackPlugin()
    ]
}