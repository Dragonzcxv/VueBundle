module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						'style-loader',
						//'vue-style-loader',
						'css-loader',
						'postcss-loader',
						'sass-loader'
					],
				}
			]
		}
	}
};