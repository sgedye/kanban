import * as path from "path";
import { HotModuleReplacementPlugin } from "webpack";

const common = require("./webpack.common");
const { merge } = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import("webpack").Configuration} */
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  devtool: "eval-source-map",
  devServer: {
    host: "localhost",
    port: 9000,
    static: path.resolve(__dirname, "../dist"),
    open: "chrome",
    hot: true,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: "[name].css",
    }),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "/public/index.html",
      favicon: path.resolve(__dirname, "../public/favicon_dev.ico"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
        include: [path.resolve(__dirname, "../src/assets")],
      },
    ],
  },
});
