import path from 'path';

const config = {
    mode: 'production',
    entry: './src/index.js',
    resolve: {
      extensions: ['.js'],
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          use: 'babel-loader',
        },
      ],
    },
    target: 'node',
    output: {
      path: path.resolve('dist'),
      filename: 'main.js',
      globalObject: 'this',
      library: {
        name: 'aliasGenerator',
        type: 'umd',
      },
    }
};

export default config;
