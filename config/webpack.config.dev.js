const path = require("path");
const webpack = require("webpack");

//config dir pwd
const CONFIG_PATH = path.resolve(__dirname);
//sorce code pwd
const APP_PATH = path.resolve(CONFIG_PATH, "../src");
//App entry
const APP_FILE = path.resolve(APP_PATH, "../index.js");
//dist
const BUILD_PATH = path.resolve(ROOT_PATH, "../dist");

module.exports = {
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client?reload=true",
    APP_FILE
  ],
  output: {
    path: BUILD_PATH,
    filename: "bundle,js",
    publicPath: "/assets/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: loader => [require("autoprefixer")()]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: loader => [require("autoprefixer")()]
            }
          },
          "less-loader"
        ]
      },
      {
        test: /\.(eot|woff|ttf|woff2|svg|gif)(\?|$)/,
        loader: "file-loader?name=[hash].[ext]"
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader?limit=1200&name=[hash].[ext]"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development") //定义编译环境
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
