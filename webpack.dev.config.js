const path=require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist'),
        publicPath:''
    },
    
    mode:'development',
    devServer: {
contentBase: path.resolve(__dirname,'dist'),
index: 'index.html',
port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/, 
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            },
            {
                test: /\.(xml)$/, 
                use: [
                    'xml-loader'
                ]
            },
            {
                test: /\.(hbs)$/, 
                use: [
                    'handlebars-loader'
                ]
            }


        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            title: "Hello World New",
            template: 'src/index.hbs',
            description: "Some description"
        })
    ]
}