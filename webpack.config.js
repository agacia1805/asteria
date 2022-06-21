// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
    devServer: {
        host: 'localhost',
        open: true,
    },
    entry: './src/index.js',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env', '@babel/preset-react'] },
                test: /\.(js|jsx)$/i,
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
};

module.exports = (nv) => {
    if (isProduction) {
        config.mode = 'production';

        config.plugins.push(new MiniCssExtractPlugin());

        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = 'development';
    }

    return config;
};

module.exports = {
    resolve: {
        alias: {
            // '@': path.resolve(__dirname, 'src/'),
            Assets: path.resolve(__dirname, 'src/Assets'),
            Components: path.resolve(__dirname, 'src/Components'),
            Layouts: path.resolve(__dirname, 'src/Layouts'),
            Pages: path.resolve(__dirname, 'src/Pages'),
            Routes: path.resolve(__dirname, 'src/Routes'),
            scss: path.resolve(__dirname, 'src/scss'),
        },

        // extensions: ['.js', '.ts', '.jsx', '.tsx'],
    },
};
