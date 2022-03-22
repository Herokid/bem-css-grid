const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const rulesJS = {
    test: /\.js$/,
    loader: "babel-loader",
    options: {
        presets: ["@babel/preset-env"]
    }
};

const rulesCSS = {
    test: /\.s[ac]ss$/i,
    use: [
        MiniCssExtractPlugin.loader, 
        "css-loader",
        "sass-loader"
    ]
};

const rules = [rulesJS, rulesCSS];

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: 'development',

        entry: {
            main: ['./src/index.js', './src/scss/styles.scss'],
            grid: ['./src/scss/grid/styles.scss'],
        },

        output: {
            filename: '[name].js',  
            clean: true,
        },

        resolve: {
            alias: {
                vue: 'vue/dist/vue.esm-bundler.js',
            },
        },
    
        devServer: {
            static: {
                directory: path.resolve(__dirname, "dist"),
                staticOptions: {},
                publicPath: "/",
                serveIndex: true,
                watch: true
            },
            watchFiles: ['src/**/*.html', 'src/**/*.scss', 'src/**/*.js'],
        },

        plugins: [
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: false,
                __VUE_PROD_DEVTOOLS__: false,
            }),
            new HtmlWebpackPlugin(
                { 
                    templateParameters: { page: 'home' },
                    template: './src/index.html'
                }
            ),
            new MiniCssExtractPlugin({filename: '[name].css' }),
        ],
    
        module: { rules }
    }
};