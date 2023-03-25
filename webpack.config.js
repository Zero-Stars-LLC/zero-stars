const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: '/',
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/signup': 'http://localhost:3000',
      '/login': 'http://localhost:3000',
    },
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/client/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react', { targets: 'defaults' }],
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 },
          },
          // Creates `style` nodes from JS strings
          //   'style-loader',
          // // Compiles Sass to CSS
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
};
