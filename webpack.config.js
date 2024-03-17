const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const favicon = 'src/images/favicon/favicon-warnschild-64.ico';
const plugins = [
  new HtmlWebpackPlugin({
    // Refer to https://github.com/jantimon/html-webpack-plugin#options
    title: 'Chicken Dinner',
    filename: 'index.html',
    template: 'src/pages/home.html',
    favicon,
  }),
  new HtmlWebpackPlugin({
    title: 'Impressum - Chicken Dinner',
    filename: 'impressum.html',
    template: 'src/pages/impressum.html',
    favicon,
  }),
  new HtmlWebpackPlugin({
    title: 'Datenschutz - Chicken Dinner',
    filename: 'datenschutz.html',
    template: 'src/pages/datenschutz.html',
    favicon,
  }),
  // new ESLintPlugin(),
];

module.exports = {
  plugins: plugins,
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/js/main.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    assetModuleFilename: 'assets/[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: {
      app: { name: 'chrome' },
    },
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
