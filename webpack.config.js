/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');

const BUILD_NAME = 'build';

module.exports = (env) => {
    return {
        entry: path.join(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.join(__dirname, BUILD_NAME),
            filename: '[name].[contenthash].js',
            clean: true,
            publicPath: '/',
            globalObject: 'this',
        },
        mode: process.env.NODE_ENV || 'development',
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            extensions: ['.tsx', '.ts', '.js', '.json'],
        },
        module: getLoaders(),
        plugins: getPlugins(env),
        devServer: {
            contentBase: path.join(__dirname, BUILD_NAME),
            compress: true,
            port: 3005,
            open: true,
            hot: true,
            historyApiFallback: true,
        },
    };
};

/**
 * Loaders used by the application.
 */
function getLoaders() {
    const esbuild = {
        test: /\.(js|jsx|ts|tsx)?$/,
        loader: 'esbuild-loader',
        options: {
            loader: 'tsx',
            target: 'es2015',
        },
        exclude: /node_modules/,
    };

    const loaders = {
        rules: [
            esbuild,
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ['file-loader'],
            },
        ],
    };

    return loaders;
}

/**
 * Plugins
 */
function getPlugins(env) {
    const tsChecker = new ForkTsCheckerPlugin();
    const hmr2 = new webpack.HotModuleReplacementPlugin();
    const html2 = new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
    });
    const dontenv2 = new Dotenv({
        path: env['env_code']
            ? './envs/.env.' + env['env_code']
            : './envs/.env.testing.local',
    });
    return [tsChecker, hmr2, html2, dontenv2];
}
