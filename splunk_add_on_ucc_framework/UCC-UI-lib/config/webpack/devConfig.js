var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;

module.exports = {
    debug: true,
    devtool: 'eval-source-map',
    watch: true,
    keepalive: true,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.DefinePlugin({
            __CONFIG_FROM_FILE__: false
        }),
        new LicenseWebpackPlugin({
            outputFilename: '[name].[hash].licenses.txt',
            perChunkOutput: true,
            addBanner: true
        })
    ]
};
