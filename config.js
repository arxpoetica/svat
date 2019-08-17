import dotenv from 'dotenv'

const results = dotenv.config()
if (results.error) {
	throw results.error
}

export const config = {
	cached: {},
	cachedlength: 0,
	getAll() {
		if (!this.cachedlength) {
			for (let key in config.parsed) {
				if (key.match(/^SVAT_/)) {
					this.cached[`process.env.${key}`] = JSON.stringify(config.parsed[key])
				}
			}
			this.cached['process.env.NODE_ENV'] = JSON.stringify(process.env.NODE_ENV)
			this.cached['process.env.PORT'] = JSON.stringify(process.env.PORT)
			this.cachedlength = Object.keys(this.cached).length
			// console.log(config.parsed)
			// console.log(this.cached)
		}
		return this.cached
	},
}
