// webpack.config.js
const Encore = require('@symfony/webpack-encore');
const path   = require('path');

const JS_PATH= path.resolve(__dirname, './src');

Encore

    .setOutputPath(path.resolve(__dirname, './build'))

    .setPublicPath('/build')

    .cleanupOutputBeforeBuild()

    .addEntry('app', path.resolve(JS_PATH, './main.js'))

    .enableSourceMaps(false)
;

let config = Encore.getWebpackConfig();
config.target = "node";

module.exports = config;