const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "eval-cheap-module-source-map",
  entry: "./src/index.js",
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, "dist")
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["env"]
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            // creates style nodes from JS strings
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            // translates CSS into CommonJS
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            // compiles Sass to CSS
            loader: "sass-loader",
            options: {
              outputStyle: "expanded",
              sourceMap: true,
              sourceMapContents: true
            }
          }
          // Please note we are not running postcss here
        ]
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // On development we want to see where the file is coming from, hence we preserve the [path]
              name: "[path][name].[ext]?hash=[hash:20]",
              limit: 8192
            }
          }
        ]
      },
      {
        // Load all icons
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: "./index2.html",
      filename: "index2.html",
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: "./index3.html",
      filename: "index3.html",
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: "./index4.html",
      filename: "index4.html",
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: "./index5.html",
      filename: "index5.html",
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: "./index6.html",
      filename: "index6.html",
      inject: true
    })
  ]
};
