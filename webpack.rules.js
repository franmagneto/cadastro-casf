module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|.webpack)/,
    use: ['babel-loader', 'eslint-loader'],
  },
  {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.(woff|woff2|eot|ttf|svg)$/,
    loader: 'file-loader',
  },
];
