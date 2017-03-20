module.exports = {
  entry: {
    'app': './app.js'
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: [
          'react'
        ],
        plugins: []
      }
    }]
  },
}
