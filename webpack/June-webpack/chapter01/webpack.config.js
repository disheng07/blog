
var  path = require('path');
var  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'./dist')
  },
  module: {
   rules: [{
     test: /\.css$/,
    //  方法一
    //  use: ['style-loader','css-loader?minimize']
    // 方法二
    use: ExtractTextPlugin.extract({
      use: ['css-loader']
     })
    }
   ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: `[name].css`
    })
 ] 
};
