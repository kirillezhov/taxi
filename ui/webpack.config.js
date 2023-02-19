const path = require('path');
const tsNameof = require('ts-nameof');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isReleaseBuild = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isReleaseBuild ? 'production' : 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        getCustomTransformers: () => ({ before: [tsNameof] }),
                    },
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(
            Object.assign(
                {},
                {
                    template: path.resolve(__dirname, 'public', 'index.html'),
                    favicon: './public/favicon.ico',
                    filename: 'index.html',
                    manifest: './public/manifest.json',
                },
                isReleaseBuild
                    ? {
                        minify: {
                            removeComments: true,
                            collapseWhitespace: true,
                            removeRedundantAttributes: true,
                            useShortDoctype: true,
                            removeEmptyAttributes: true,
                            removeStyleLinkTypeAttributes: true,
                            keepClosingSlash: true,
                            minifyJS: true,
                            minifyCSS: true,
                            minifyURLs: true,
                        },
                    }
                    : undefined
            )
        ),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};