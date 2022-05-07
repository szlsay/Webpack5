const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    // assetModuleFilename: 'img/[name].[hash:8][ext]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'hello say',
      template: './public/index.html',
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
            ignore: ['**/index.html', '**/.DS_Store', '**/a.css'],
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader: "css-loader", // 写法一
        // use: ["css-loader"], // 写法二
        use: [
          // 写法三
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }, // 单独文件
          // { // 复合写法
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [require('autoprefixer')],
          //     },
          //   },
          // },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
          { loader: 'postcss-loader' },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [require('autoprefixer')],
          //     },
          //   },
          // },
        ],
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[hash:8].[ext]',
      //         outputPath: 'img',
      //         esModule: false,
      //       },
      //     },
      //   ],
      //   type: 'javascript/auto',
      // },
      // {
      //   test: /\.(png|jpe?g|gif|svg)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         name: '[name].[hash:8].[ext]',
      //         outputPath: 'img',
      //         limit: 20 * 1024,
      //         esModule: false,
      //       },
      //     },
      //   ],
      //   type: 'javascript/auto',
      // },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024,
          },
        },
      },
      // {
      //   test: /\.ttf|eot|woff2?$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[hash:8].[ext]',
      //         outputPath: 'font',
      //         esModule: false,
      //       },
      //     },
      //   ],
      //   type: 'javascript/auto',
      // },
      {
        test: /\.ttf|eot|woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:8][ext]',
        },
      },
    ],
  },
}
