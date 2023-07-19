import path from 'path';

const config = {
    target: 'web',
    output: {
      path: path.resolve('dist'),
      filename: 'alias.js',
      library: {
        name: 'Alias',
        type: 'var'
      },
    },
    mode: 'production',
    entry: './src/index.js',
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

export default config;
