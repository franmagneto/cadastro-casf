const rules = require('./webpack.rules');

module.exports = {
  // Put your normal webpack config below here
  module: { rules },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};
