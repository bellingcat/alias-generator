import path from 'path';

const commonConfig = {
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
};

const webConfig = {
    target: 'web',
    output: {
      path: path.resolve('dist'),
      filename: 'browser.js',
      library: 'Alias'
    },
    ...commonConfig
};
const nodeConfig = {
    target: 'node',
    output: {
      path: path.resolve('dist'),
      filename: 'main.cjs',
      globalObject: 'this',
      library: {
        name: 'Alias',
        type: 'umd',
      },
    },
    ...commonConfig
};

export default [webConfig, nodeConfig];
