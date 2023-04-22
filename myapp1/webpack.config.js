const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: ['react', 'react-dom'],
        filename: 'mysdk.js',
        // globalObject: 'this',
        libraryTarget: 'umd',
        publicPath: "/",


    },

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
                    // publicPath: "/",
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
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            // 'public': path.resolve(__dirname, 'src/images')

            // 'react': 'preact/compat',
            // 'react-dom': 'preact/compat'
        }
    },

    // externals: {
    //     'react': 'React'
    // }
}