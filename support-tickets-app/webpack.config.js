import HtmlWebpackPlugin from 'html-webpack-plugin';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js';

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    port: 3001,
    historyApiFallback: true
  },
  output: {
    publicPath: 'auto'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'support_tickets',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App'
      },
      shared: {
        react: { singleton: true, requiredVersion: '^19.1.0' },
        'react-dom': { singleton: true, requiredVersion: '^19.1.0' }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

export default config;
