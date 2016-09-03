const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {

    entry: {
        main: './src/main.jsx'
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/', // ---> this allows loading deep-routes correctly
    },

    devtool: 'inline-source-map',
    devServer:{
        inline: true,
        historyApiFallback: true, // ---> this allows loading deep-routes correctly
        stats: 'minimal'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {

        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                include: path.join(__dirname, 'src'),
                query: {
                    presets: ['latest', 'react'],
                    plugins: ['transform-decorators-legacy']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css', 'sass'])
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('main.css'),
        new HtmlWebpackPlugin({
            title: 'How it works: React Router',
            template: 'index.html',
            inject: true
        })
    ]
};
