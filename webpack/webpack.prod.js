const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const commonPaths = require('./paths');

module.exports = {
  mode: 'production',
  output: {
    filename: `${commonPaths.jsFolder}/[name].[hash].js`,
    path: commonPaths.outputPath,
    chunkFilename: `${commonPaths.jsFolder}/[name].[chunkhash].js`,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        // Enabling file caching
        cache: true,
        sourceMap: true,
      }),
    ],
    // Automatically split vendor and commons as when app grows we will require more js libraries to be added in the project, so sperate bundles will be created for library and actual code, where library code can be cached as it will not change
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
        },
        async: {
          test: /[\\/]node_modules[\\/]/,
          name: 'async',
          chunks: 'async',
          minChunks: 4,
        },
      },
    },
    // Keep the runtime chunk seperated to enable long term caching
    runtimeChunk: true,
  },

  module: {
    rules: [], // further rules can be added to optimise css
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: 'source-map',
};
