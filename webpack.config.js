const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const sass = require('./webpack/sass');
const babel = require('./webpack/babel');
const extractCss = require('./webpack/cssExtract');
const devServer = require('./webpack/devserver');
const images = require('./webpack/files');
const css = require('./webpack/css');
const sourceMap = require('./webpack/sourceMap');
const cleaner = require('./webpack/cleaner');
const styleLint = require('./webpack/styleLint');

const PATHS = {
	source: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'dist'),
};

const common = merge([
	{
		entry: PATHS.source + '/index.js',
		output: {
			path: PATHS.build,
			filename: './js/[name].js',
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "./src/index.html"
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
			}),
		]
	},
	{
		resolve: {
			alias: {
				vue: 'vue/dist/vue.js'
			},
		},
	},
	babel(),
	images(),
	styleLint(),
]);

module.exports = function(env, argv) {
	if (argv.mode === 'production') {
		return merge([
			common,
			extractCss(),
			cleaner(),
		]);
	}
	if (argv.mode === 'development') {
		return merge([
			common,
			devServer(),
			sass(),
			css(),
			sourceMap(),
		]);
	}
}
