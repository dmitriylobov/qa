const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'dev';

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]

            }, {
                test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'font/'
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')()
                            ]
                        }
                    }
                ]

            },
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            }
        ]
    },
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:80',
        'webpack/hot/only-dev-server',
        "./main.js"],
    output: {
        filename: "build.js"
    },
    watch: NODE_ENV === 'dev',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: 'sourcemap',
    mode: NODE_ENV === 'dev' ? 'development' : null,
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};