var webpack = require('webpack');
const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;

module.exports = {
    devtool: 'null',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.DefinePlugin({
            __CONFIG_FROM_FILE__: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new LicenseWebpackPlugin({
            outputFilename: '[name].[hash].licenses.txt',
            perChunkOutput: true,
            addBanner: true
        })
    ]
};
