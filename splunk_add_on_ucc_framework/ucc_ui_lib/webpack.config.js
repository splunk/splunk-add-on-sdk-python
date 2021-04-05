const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('@splunk/webpack-configs/base.config').default;

module.exports = webpackMerge(baseConfig, {
    entry: {
        entry_page: path.join(__dirname, 'src/main/webapp/pages/entry_page')
    },
    output: {
        path: path.join(__dirname, 'stage/appserver/static/js/build'),
        filename: '[name].js',
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, 'src/main/resources/splunk'),
                to: path.join(__dirname, 'stage'),
            },
        ]),
    ],
    devtool: 'eval-source-map',
});