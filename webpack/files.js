module.exports = function () {
	return {
		module: {
			rules: [
				{
					test: /\.(jpg|png|svg)$/,
					loader: 'file-loader',
					options: {
						name: 'images/[name].[ext]',
					},
				},
				{
					test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: 'fonts/[name].[ext]'
							}
						}
					]
				}
			],
		},
	};
};