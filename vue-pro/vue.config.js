module.exports = {
  lintOnSave: true,
  devServer: {
    open: true,
    host: 'localhost',
    port: 12306,
    proxy: {
      '/api': {
        target: 'http://localhost:80/',
        changeOrigin: true,
        ws:false,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
