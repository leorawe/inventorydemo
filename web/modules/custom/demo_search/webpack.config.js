const path = require('path');
const isDevMode = process.env.NODE_ENV !== 'production';
// const Dotenv = require('dotenv-webpack');

const config = {
  entry: {
    main: ["./js/src/index.jsx"]
  },
  devtool: (isDevMode) ? 'source-map' : false,
  mode: (isDevMode) ? 'development' : 'production',
  output: {
    path: isDevMode ? path.resolve(__dirname, "js/dist") : path.resolve(__dirname, "js/dist"),
    filename: '[name].min.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"]
    }
  },
  performance: {
    maxEntrypointSize: 800000,
    maxAssetSize: 800000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'js/src'),
      },
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
    ],
  }
};

module.exports = config;