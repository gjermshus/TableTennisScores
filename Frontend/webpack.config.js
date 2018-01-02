const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist/'),
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /.tsx?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'awesome-typescript-loader',
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      enforce: "pre", test: /\.js$/, loader: "source-map-loader"
    }
  ]
  },
  resolve: {
    extensions: [".ts", ".tsx", '.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: '/dist/',
    //path: path.resolve(__dirname, "public"),
    contentBase: path.resolve(__dirname, "public"),
    inline: true,
    watchContentBase: true,
    hot: true,
    hotOnly: true
  },
  
};