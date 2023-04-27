const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'finalTask'),
        library: ['react', 'react-dom'],
        filename: 'sdk.js',
        // globalObject: 'this',
        libraryTarget: 'umd',
        publicPath: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            scriptLoading: 'blocking'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: 'src/dist/images', to: 'images'},
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                    publicPath: "/",
                    // outputPath: 'images/',
                },
            },
        ]
    },
    externals: {
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },

    },
    devServer: {
        port: 3000
    },
    externals: {
        'mysdk': 'mysdk'
    },
    // resolve: {
    //     extensions: ['.js', '.jsx'],
    //     alias: {
    //
    //     }
    // },

    // externals: {
    //     'mysdk': 'mysdk'
    // }
}