import path from 'path';

const config = {
    target: 'web',
    output: {
      path: path.resolve('dist'),
      filename: 'main.js',
      library: 'Alias'
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
