const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/js/main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    devServer: {
        contentBase: 'dist/',
        publicPath: '/',
        inline: true,
        port: process.env.PORT || 3000,
        host: '127.0.0.1',
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.(scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader'
                }]
            })
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[hash].[ext]'
                    }
            }]
        }, {
            test: /\.(html)$/,
            use: {
                loader: 'html-loader'
            }
        }, {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[hash].[ext]'
                }
            }]
        }, {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'fonts/[hash].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'main.[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};