const path=require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    entry: {'hello-world':'./src/hello-world.js',
    'kiwi': './src/kiwi.js'
    },
    output: {
        filename: '[name].bundle.js',
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
            title: "Hello World Development",
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            template: 'src/page-template.hbs',
            description: "Hello World Development"
        }),
        new HtmlWebpackPlugin({
            title: "Kiwi Development",
            filename: 'kiwi.html',
            chunks: ['kiwi'],
            template: 'src/page-template.hbs',
            description: "Kiwi Development"
        })
    ]
}