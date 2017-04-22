'use strict';

var webpack = require('webpack');
var path = require('path');
var HTMLPlugin = require('html-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

var packageJson = require('./package.json');
var copyright = [
    'vse ' + packageJson.version,
    '(c) https://github.com/dmitrykurmanov',
    'http://editor.surveyjs.io/license.html'
].join('\n');
var outputFolder = 'dist';

module.exports = function(options) {
    var config = {
        entry: path.join(__dirname, './src/index.js'),
        output: {
            path: path.join(__dirname, `./${outputFolder}`),
            filename: `surveyjs-editor-vue.${options.buildType === 'prod' ? 'min.': ''}js`,
            library: 'SurveyEditor',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        resolve: {
            extensions: ['.vue', '.js']
        },
        externals: {
            'vue': {
                root: 'Vue',
                commonjs2: 'vue',
                commonjs: 'vue',
                amd: 'vue'
            },
            'vuex': {
                root: 'vuex',
                commonjs2: 'vuex',
                commonjs: 'vuex',
                amd: 'vuex'
            }
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        esModule: true
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                }
            ]
        },
        plugins: [
            new webpack.BannerPlugin(copyright),
            new HTMLPlugin({
                template: './template.html',
                inject: 'head'
            }),
            new FriendlyErrorsWebpackPlugin()
        ],
        devtool: options.buildType === 'prod' ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, outputFolder),
            open: true,
            port: 9333
        }
    };

    if (options.buildType === 'prod') {
        config.plugins = config.plugins.concat([
            new webpack.optimize.UglifyJsPlugin()
        ]);
    }

    return config;
};