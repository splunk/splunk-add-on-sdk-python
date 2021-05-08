var webpack = require('webpack');
var LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;

module.exports = {
    devtool: 'null',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new LicenseWebpackPlugin(),
        new webpack.DefinePlugin({
            __CONFIG_FROM_FILE__: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
};
