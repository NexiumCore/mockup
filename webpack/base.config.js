const { boilerpack } = require('boilerpack');
const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = boilerpack({
  devServer: {
    watchOptions: {
      poll: true,
      ignored: /node_modules/,
    },
    historyApiFallback: {
      index: '/index.html',
    },
    host: '0.0.0.0',
    disableHostCheck: true,
    compress: true,
    noInfo: true,
    contentBase: resolve(__dirname, '../dist'),
  },
  devtool: 'source-maps',
})
  .addEntry('main', ['./src/Main', 'preact'])
  .addExtensions('.ts', '.tsx', '.scss', 'jpg', 'png')
  .addRule('typescript', {
    test: /\.(tsx|ts)$/,
    use: 'ts-loader',
  })
  .addRule('sass', {
    test: /\.scss?$/,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { modules: true } },
      'sass-loader',
    ],
  })
  .addRule('image', {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
      'file-loader',
      {
        loader: 'image-webpack-loader',
        options: {
          bypassOnDebug: true,
          disable: true,
          mozjpeg: {
            progressive: true,
            quality: 65,
          },
          webp: {
            quality: 75,
          },
        },
      },
    ],
  })
  .addPlugin(
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
      chunks: ['main'],
      minify: true,
      inlineSource: '.(js|css)$',
    }),
  )
  .addPlugin(new HtmlWebpackInlineSourcePlugin())
  .withOutput({
    publicPath: '/',
    filename: '[hash].bundle.js',
    chunkFilename: '[chunkhash].chunk.js',
    path: resolve(__dirname, '../dist'),
    crossOriginLoading: 'anonymous',
  });
