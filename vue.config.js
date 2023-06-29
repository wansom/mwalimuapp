module.exports = {
	runtimeCompiler: true,

	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Dial A Lawyer'
				
				return args
			})
	},
	pluginOptions: {
		sitemap: {
		  urls: [
			'https://dialalawyer.africa/',
			'https://dialalawyer.africa/find-a-lawyer',
			'https://dialalawyer.africa/contact-us',
			'https://dialalawyer.africa/sign-up',
			'https://dialalawyer.africa/sign-in'
		  ]
		}
	  }
}
