module.exports = {
  entry: './src/index.js',

  resolve: {
    extensions: ['', '.js']
  },

  output: {
    path: './dist',
    filename: 'index.js',
    library: 'bemGenerator',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        },
        exclude: /node_modules/
      }
    ]
  }
}
