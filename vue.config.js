var publicPath;
var config = {}

if (process.env.NODE_ENV === 'production') {
  config.publicPath = "/wp-content/themes/mint-gallery-spa/dist";
  
  config.chainWebpack = config => {
    if(config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin && extractCSSPlugin.tap(() => [{
        filename: '[name].css',
        chunkFilename: '[name].css'
      }])
    }
  }

  config.configureWebpack = {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    }
  }

} else {
  config.publicPath = "http://localhost:9876/";
}

module.exports = config