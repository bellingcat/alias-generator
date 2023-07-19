import path from 'path';

const commonConfig = {
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

const webConfig = {
    target: 'web',
    output: {
      path: path.resolve('dist'),
      filename: 'index.js',
      library: {
        name: 'Alias',
        type: 'var'
      },
    },
    ...commonConfig
};
const nodeConfig = {
    target: 'node',
    output: {
      path: path.resolve('dist'),
      filename: 'index.node.js',
      libraryTarget: 'commonjs2',
    },
    ...commonConfig
};

export default [webConfig, nodeConfig];
