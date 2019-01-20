const path=require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    entry: {'hello-world':'./src/hello-world.js',
'kiwi': './src/kiwi.js'
},
    //'./src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'./dist'),
        publicPath:''
    },
    
    mode: 'production',
        optimization: {
            splitChunks: {
                chunks: "all"
            }
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
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
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
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            title: "Hello World",
            filename: "hello-world.html",
            chunks:['hello-world','vendors~hello-world~kiwi'],
            template: 'src/page-template.hbs',
            description: "Hello World"
        }),
        new HtmlWebpackPlugin({
            title: "Kiwi Page",
            filename: "kiwi.html",
            chunks:['kiwi','vendors~hello-world~kiwi'],
            template: 'src/page-template.hbs',
            description: "Kiwi Page"
        })
    ]
}