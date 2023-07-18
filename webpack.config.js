const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    target: 'web',
    output: {
      path: path.resolve('dist'),
      filename: 'index.js',
      library: {
        name: 'Alias',
        type: 'var'
      },
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          use: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
    },
};
