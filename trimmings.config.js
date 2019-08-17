export default {
	postcss: { input: 'src/client/postcss' },
	svgo: {
		input: 'src/client/svgo',
		outputSvelte: 'src/node_modules/@svat/svg',
		outputStatic: false,
	},
}
