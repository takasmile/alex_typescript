const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "@/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  //   devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: "./dist",
    compress: false,
    port: 8888,
    stats: "errors-only",
    host: "localhost",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["./dist"],
    }),
    new HtmlWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
      fallbackModuleFilenameTemplate: "[absolute-resource-path]",
      moduleFilenameTemplate: "[absolute-resource-path]",
    }),
  ],
};
