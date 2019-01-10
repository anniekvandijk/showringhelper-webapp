const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const optimizationConfig = require('./webpack.opt.config');

module.exports = merge.smart(baseConfig, optimizationConfig);
