// const path = require("path");
// const webpack = require("webpack");
// const HtmlWebPackPlugin = require("html-webpack-plugin")

// module.exports = {
//  // entry: "./public/index.js",
//  entry: {
//     javascript: "./src/index.jsx",
//     html: "./public/index.html"
//   },
//   mode: "development",
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: "babel-loader",
//         options: { presets: ["@babel/env"] }
//       },
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"]
//       }
//     ]
//   },
//   resolve: { extensions: ["*", ".js", ".jsx"] },
// //   output: {
// //     path: path.resolve(__dirname, "dist/"),
// //     publicPath: "/dist/",
// //     filename: "bundle.js"
// //   },
//   devServer: {
//     contentBase: path.join(__dirname, "public/"),
//     port: 3000,
//     publicPath: "http://localhost:3000/dist/",
//     hotOnly: true
//   },
//   //plugins: [new webpack.HotModuleReplacementPlugin()]
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: "./public/index.html",
//       filename: "./index.html"
//     })
//   ],
  
// };

const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require("path")
module.exports = {
  devtool: "source-map",
  output: {
    publicPath: '/',
    path: path.join(__dirname, "build"),
  },
  devServer: {
    port: 3000,
    overlay: {
      warnings: true,
      errors: true
    },
    historyApiFallback: {
      index: '/index.html'
    },
    contentBase: path.join(__dirname, "public"),
    hot: true
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: "url-loader",
          options: {
            limit: 30000,
            name: "[name].[ext]"
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],

  entry: {
    javascript: "./src/start/index.jsx",
    html: "./public/index.html"
  }
}