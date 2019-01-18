var path = require( 'path' );
var AssetsPlugin = require( 'assets-webpack-plugin' );

var config = {}

if (process.env.NODE_ENV === 'production') {
  config.publicPath = "/wp-content/themes/mint-gallery-spa/dist";
  
  config.chainWebpack = config => {
    if(config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin && extractCSSPlugin.tap(() => [{
        filename: '[name]-[hash].css',
        chunkFilename: '[name]-[hash].css'
      }])
    }
  }

  config.configureWebpack = {
    output: {
      filename: '[name]-[hash].js',
      chunkFilename: '[name]-[hash].js'
    },
    plugins: [
      new AssetsPlugin({
        filename: 'assets.json',
        path: path.resolve( __dirname, './build' ),
        fullPath: false
      })
    ]
  }

} else {
  config.publicPath = "http://localhost:9876/";
}

module.exports = config