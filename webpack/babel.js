const ESLintPlugin = require('eslint-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
				},
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: ['babel-loader'],
				}
			]
		},
		plugins: [
			new ESLintPlugin(),
			new VueLoaderPlugin(),
		]
	}
}