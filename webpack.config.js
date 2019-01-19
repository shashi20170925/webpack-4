const path=require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist'),
        publicPath:'myAwesomesite/'
    },
    
    mode:'none',
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/, 
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(xml)$/, 
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
}