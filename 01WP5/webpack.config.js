const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
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
        ],
      },
    ],
  },
}
