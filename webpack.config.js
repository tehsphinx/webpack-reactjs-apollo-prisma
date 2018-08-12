// This library allows us to combine paths easily
const path = require('path');

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        app: path.resolve(__dirname, './src/index.jsx'),
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                // exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] },
                },
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src',
        publicPath: '/public'
    }
};
