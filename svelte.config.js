const { resolve } = require('path')
const sveltePreprocess = require('svelte-preprocess')

module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: [resolve('./src/styles')]
    }
  })
}
