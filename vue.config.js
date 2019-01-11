var publicPath;


if (process.env.NODE_ENV === 'production') {
  publicPath = "/wp-content/themes/mint-gallery-spa";
} else {
  publicPath = "http://localhost:9876/";
}


module.exports = {
  publicPath: publicPath,
  // path:
  devServer: {
    disableHostCheck: true
  }
}