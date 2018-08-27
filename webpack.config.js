const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public_html')
    },
    devServer: {
        contentBase: path.join(__dirname, 'public_html'),
        compress: true,
        inline: true,
        open: true,
        port: 9000
    }
};
